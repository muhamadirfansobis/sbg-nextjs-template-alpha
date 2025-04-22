import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer block bg-(--color-sbg-900) p-6 text-center text-sm text-white">
      © {new Date().getFullYear()} | Sobatbisnis Group. All Rights Reserved.
    </footer>
  );
};
