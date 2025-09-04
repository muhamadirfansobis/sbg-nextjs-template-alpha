// import { createNavigation } from "next-intl/navigation";

// export const locales = ["en", "id"] as const;
// export const localePrefix = "never"; // Changed from "never" to match middleware.ts

// // The `pathnames` object is optional and allows you to map paths
// // to different translations depending on the locale.
// // For now, we'll keep it simple. Add your pathnames here if needed.
// // export const pathnames = {
// //   "/": "/",
// //   "/about": {
// //     en: "/about",
// //     id: "/tentang-kami",
// //   },
// // };

// export const defaultLocale = "id" as const;

// export const { Link, redirect, usePathname, useRouter } = createNavigation({
//   locales,
//   localePrefix,
//   defaultLocale,
//   // pathnames, // Uncomment if you define pathnames
// });

import { createNavigation } from 'next-intl/navigation';
import { routing } from '../routing';

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
