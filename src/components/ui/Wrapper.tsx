'use client';

import React, { ReactNode } from 'react';
import { Footer } from './Footer';
import { THEME_CONFIG } from '@/themeConfig/themeConfig';
import { ThemeProvider } from '@/providers/themeProvider';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    // Note: Themeprovider is only use if you want to use custom theme color. If you want use SBG theme color, remove the ThemeProvider
    <ThemeProvider themeData={THEME_CONFIG}>
      {children}
      <Footer />
    </ThemeProvider>
  );
};
