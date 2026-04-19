'use client';

import { RouterProvider, useRouter } from '@/lib/router';
import { LanguageProvider } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import Navigation from '@/components/website/Navigation';
import Footer from '@/components/website/Footer';
import WhatsAppButton from '@/components/website/WhatsAppButton';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

// Lazy load all pages for performance
const PageHome = lazy(() => import('@/components/website/pages/PageHome'));
const PageAbout = lazy(() => import('@/components/website/pages/PageAbout'));
const PageTreatments = lazy(() => import('@/components/website/pages/PageTreatments'));
const PageCases = lazy(() => import('@/components/website/pages/PageCases'));
const PageProjects = lazy(() => import('@/components/website/pages/PageProjects'));
const PageReferring = lazy(() => import('@/components/website/pages/PageReferring'));
const PageAppointment = lazy(() => import('@/components/website/pages/PageAppointment'));
const PageContact = lazy(() => import('@/components/website/pages/PageContact'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF5]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-deep-green/20 border-t-deep-green rounded-full animate-spin" />
        <span className="text-stone text-sm tracking-widest uppercase">Loading</span>
      </div>
    </div>
  );
}

const pageComponents: Record<string, React.ComponentType> = {
  home: PageHome,
  about: PageAbout,
  treatments: PageTreatments,
  cases: PageCases,
  projects: PageProjects,
  referring: PageReferring,
  appointment: PageAppointment,
  contact: PageContact,
};

function PageRenderer() {
  const { currentPage } = useRouter();
  const PageComponent = pageComponents[currentPage] || PageHome;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Suspense fallback={<PageLoader />}>
          <PageComponent />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <LanguageProvider translations={translations} defaultLang="en">
      <RouterProvider>
        <Navigation />
        <main>
          <PageRenderer />
        </main>
        <Footer />
        <WhatsAppButton />
      </RouterProvider>
    </LanguageProvider>
  );
}
