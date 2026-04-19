'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export type PageName =
  | 'home'
  | 'about'
  | 'treatments'
  | 'cases'
  | 'projects'
  | 'referring'
  | 'appointment'
  | 'contact';

interface RouterContextType {
  currentPage: PageName;
  navigate: (page: PageName) => void;
  previousPage: PageName | null;
}

const validPages: PageName[] = ['home', 'about', 'treatments', 'cases', 'projects', 'referring', 'appointment', 'contact'];

function resolvePage(hash: string | null | undefined): PageName {
  const page = (hash || '').replace(/^#/, '') as PageName;
  return validPages.includes(page) ? page : 'home';
}

const RouterContext = createContext<RouterContextType>({
  currentPage: 'home',
  navigate: () => {},
  previousPage: null,
});

export function useRouter() {
  return useContext(RouterContext);
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageName>('home');
  const [previousPage, setPreviousPage] = useState<PageName | null>(null);

  useEffect(() => {
    const initialPage = resolvePage(window.location.hash);
    setCurrentPage(initialPage);
  }, []);

  const navigate = useCallback(
    (page: PageName) => {
      setPreviousPage(currentPage);
      setCurrentPage(page);
      if (window.location.hash !== `#${page}`) {
        window.history.pushState({ page }, '', `#${page}`);
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    [currentPage]
  );

  useEffect(() => {
    const handleHashChange = () => {
      const page = resolvePage(window.location.hash);
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  return <RouterContext.Provider value={{ currentPage, navigate, previousPage }}>{children}</RouterContext.Provider>;
}
