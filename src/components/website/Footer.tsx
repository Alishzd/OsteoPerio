'use client';

import { Instagram, Mail, Phone, ArrowUp, Globe2 } from 'lucide-react';
import { useRouter, PageName } from '@/lib/router';
import { useLanguage } from '@/lib/i18n';
import OsteoPerioLogo from './OsteoPerioLogo';

export default function Footer() {
  const { navigate } = useRouter();
  const { t } = useLanguage();

  const quickLinks: { label: string; page: PageName }[] = [
    { label: t('nav.home'), page: 'home' },
    { label: t('nav.about'), page: 'about' },
    { label: t('nav.treatments'), page: 'treatments' },
    { label: t('nav.cases'), page: 'cases' },
    { label: 'International', page: 'projects' },
    { label: t('nav.referring'), page: 'referring' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#1A1A1A] text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <button onClick={() => navigate('home')} className="mb-4 block transition-opacity duration-300 hover:opacity-80">
              <OsteoPerioLogo variant="horizontal" size="md" inverted />
            </button>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/40">
              Specialist periodontal and implant surgery in Barcelona, positioned for complex patients, second opinions, referrals, and international care.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/osteoperio" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/8 transition-colors duration-300 hover:bg-white/15" aria-label="Instagram">
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a href="mailto:info@osteoperio.com" className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/8 transition-colors duration-300 hover:bg-white/15" aria-label="Email">
                <Mail className="h-4 w-4 text-white" />
              </a>
              <a href="tel:+34930000000" className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/8 transition-colors duration-300 hover:bg-white/15" aria-label="Phone">
                <Phone className="h-4 w-4 text-white" />
              </a>
              <button onClick={() => navigate('projects')} className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/8 transition-colors duration-300 hover:bg-white/15" aria-label="International patients">
                <Globe2 className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-medium tracking-wide text-white">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button onClick={() => navigate(link.page)} className="text-sm text-white/40 transition-colors duration-300 hover:text-white/80">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-medium tracking-wide text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white/40">Carrer de Muntaner<br />08011 Barcelona, Spain</li>
              <li><a href="tel:+34930000000" className="text-sm text-white/40 transition-colors duration-300 hover:text-white/80">+34 93 XXX XX XX</a></li>
              <li><a href="mailto:info@osteoperio.com" className="text-sm text-white/40 transition-colors duration-300 hover:text-white/80">info@osteoperio.com</a></li>
              <li><button onClick={() => navigate('appointment')} className="text-sm text-white/40 transition-colors duration-300 hover:text-white/80">Request consultation</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-medium tracking-wide text-white">Launch notes</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li>Replace all placeholder legal, phone, and address details.</li>
              <li>Add your exact Google Maps pin and business profile details.</li>
              <li>Connect the consultation form to your real inbox or CRM.</li>
              <li>Reintroduce media later only after optimization.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-white/25">© {new Date().getFullYear()} OsteoPerio. Lightweight no-media website build.</p>
          <button onClick={scrollToTop} className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/8 transition-colors duration-300 hover:bg-white/15" aria-label="Back to top">
            <ArrowUp className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
