'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'sbg-design-system-alpha';
import { Footer } from './Footer';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider themeData="default">
      {children}
      <Footer />
    </ThemeProvider>
  );
};
