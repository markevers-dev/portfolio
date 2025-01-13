import "./globals.css";

import clsx from "clsx";
import { getLocaleFromHeaders } from "utils/getLocaleFromHeader";
import { getThemeFromCookies } from "utils/getThemeFromCookie";
import { inter } from "public/fonts/fonts";

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
  console.log(theme);

  return (
    <html lang={locale} className={clsx({ dark: theme === "dark" })}>
      <body
        className={clsx(
          inter.className,
          "z-[1] flex h-full min-h-screen w-full flex-col bg-primary-300 text-slate-800 antialiased dark:bg-primary-900 dark:text-slate-100",
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
