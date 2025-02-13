import "./globals.css";

import clsx from "clsx";
import { getLocaleFromHeaders } from "utils/getLocaleFromHeader";
import { getThemeFromCookies } from "utils/getThemeFromCookie";
import { inter } from "public/fonts/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description: "Portfolio of Mark Evers' work",
  generator: "Next.js",
  applicationName: "Portfolio",
  referrer: "no-referrer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const RootLayout = async ({ children }) => {
  const locale = await getLocaleFromHeaders();
  const theme = await getThemeFromCookies();

  return (
    <html lang={locale} className={clsx({ dark: theme === "dark" })}>
      <body
        className={clsx(
          inter.className,
          "z-[1] flex h-full min-h-screen w-full flex-col bg-primary-100 text-slate-700 antialiased transition-colors duration-100 dark:bg-primary-900 dark:text-slate-100",
        )}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
