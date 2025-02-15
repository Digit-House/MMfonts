'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Footer, Header } from '@components/index';
import { pageview as fbPageview } from '@core/fpixel';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      sendGTMEvent(url);
      fbPageview(url);
    };
    if (pathname) {
      handleRouteChange(pathname);
    }
  }, [pathname]);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <AnimatePresence mode="wait">
          {pathname && pathname?.length > 3 ? (
            <div className="flex-grow mx-5 mt-5 sm:mx-10 md:mx-20  h-full lg:mx-auto lg:mt-10 lg:w-[996px] max-w-[996px] selection:bg-[#b7b7a4]">
              {children}
            </div>
          ) : (
            children
          )}
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Providers;
