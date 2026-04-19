'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, PageName } from '@/lib/router';
import { useLanguage, LangCode } from '@/lib/i18n';
import OsteoPerioLogo from './OsteoPerioLogo';

const languages: { code: LangCode; label: string; flag: string }[] = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'ca', label: 'Català', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

function CatalanFlag({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={`inline-block ${className}`} style={{ width: '20px', height: '14px', borderRadius: '2px', overflow: 'hidden' }} aria-label="Catalan flag">
      <rect width="20" height="14" fill="#FFD700" />
      <rect y="0" width="20" height="1.5" fill="#CE1126" />
      <rect y="2.8" width="20" height="1.5" fill="#CE1126" />
      <rect y="5.6" width="20" height="1.5" fill="#CE1126" />
      <rect y="8.4" width="20" height="1.5" fill="#CE1126" />
    </svg>
  );
}

function FlagDisplay({ code, className = '' }: { code: LangCode; className?: string }) {
  if (code === 'ca') return <CatalanFlag className={className} />;
  const lang = languages.find((l) => l.code === code);
  return <span className={`text-base leading-none ${className}`}>{lang?.flag || ''}</span>;
}

function LanguageSelector({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1.5 rounded-sm border border-transparent px-2.5 py-1.5 text-[12px] font-medium text-charcoal/50 transition-all duration-300 hover:border-[#E8E6DF] hover:text-charcoal">
        <FlagDisplay code={lang} />
        <span className="hidden sm:inline">{currentLang.code}</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className="absolute right-0 top-full z-50 mt-1.5 min-w-[160px] overflow-hidden rounded-sm border border-[#E8E6DF] bg-white shadow-sm">
            {languages.map((langItem) => (
              <button
                key={langItem.code}
                onClick={() => {
                  setLang(langItem.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] transition-colors duration-150 ${lang === langItem.code ? 'bg-deep-green/8 text-deep-green font-medium' : 'text-charcoal/70 hover:bg-[#F5F3EE] hover:text-charcoal'}`}
              >
                <FlagDisplay code={langItem.code} />
                <span>{langItem.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileLanguageSelector({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex items-center gap-2 border-b border-[#E8E6DF] px-2 py-4 ${className}`}>
      {languages.map((langItem) => (
        <button key={langItem.code} onClick={() => setLang(langItem.code)} className={`flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${lang === langItem.code ? 'bg-deep-green text-white' : 'border border-[#E8E6DF] bg-[#F5F3EE] text-charcoal/60 hover:text-charcoal'}`}>
          <FlagDisplay code={langItem.code} className="text-sm" />
          <span>{langItem.code}</span>
        </button>
      ))}
    </div>
  );
}

export default function Navigation() {
  const { currentPage, navigate } = useRouter();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { label: string; page: PageName }[] = [
    { label: t('nav.home'), page: 'home' },
    { label: t('nav.about'), page: 'about' },
    { label: t('nav.treatments'), page: 'treatments' },
    { label: t('nav.cases'), page: 'cases' },
    { label: 'International', page: 'projects' },
    { label: t('nav.referring'), page: 'referring' },
    { label: t('nav.contact'), page: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageName) => {
    setMobileOpen(false);
    navigate(page);
  };

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#FAFAF5]/95 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <button onClick={() => handleNavigate('home')} className="flex items-center transition-opacity duration-300 hover:opacity-80">
            <OsteoPerioLogo variant="horizontal" size="sm" />
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button key={item.page} onClick={() => handleNavigate(item.page)} className={`group relative rounded-sm px-3 py-2 text-[13px] font-medium transition-colors duration-300 ${currentPage === item.page ? 'text-deep-green' : 'text-charcoal/60 hover:text-charcoal'}`}>
                {item.label}
                {currentPage === item.page && <motion.div layoutId="nav-active" className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-deep-green" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSelector className="hidden sm:block" />
            <Button onClick={() => handleNavigate('appointment')} className="hidden h-10 rounded-sm bg-deep-green px-5 text-[13px] font-medium text-white transition-all duration-300 hover:bg-deep-green-light hover:shadow-md hover:shadow-deep-green/20 sm:inline-flex">
              {t('nav.requestAppointment')}
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button className="p-2 text-charcoal transition-colors duration-300 hover:text-deep-green" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-[#E8E6DF] bg-[#FAFAF5] sm:w-[360px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-[#E8E6DF] px-2 py-6">
                    <OsteoPerioLogo variant="horizontal" size="sm" />
                  </div>
                  <MobileLanguageSelector />
                  <nav className="flex flex-1 flex-col gap-1 px-2 py-6">
                    {navItems.map((item) => (
                      <button key={item.page} onClick={() => handleNavigate(item.page)} className={`rounded-sm px-4 py-3 text-left text-base transition-colors duration-200 ${currentPage === item.page ? 'bg-deep-green text-white' : 'text-charcoal/70 hover:bg-[#F5F3EE] hover:text-charcoal'}`}>
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  <div className="border-t border-[#E8E6DF] p-4">
                    <Button onClick={() => handleNavigate('appointment')} className="h-11 w-full rounded-sm bg-deep-green text-white hover:bg-deep-green-light">
                      {t('nav.requestAppointment')}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
