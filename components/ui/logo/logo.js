import Link from "next/link";
import { montserrat } from "public/fonts/fonts";
import clsx from "clsx";

export const Logo = ({ lang, size = "sm" }) => (
  <Link
    href={`/${lang}/`}
    className={clsx(
      montserrat.className,
      { "text-md": size === "sm" },
      { "text-xl": size === "xl" },
      "hover:text-primary-600 active:text-primary-500 dark:hover:text-primary-200 dark:active:text-primary-300 motion-blur-in-sm flex select-none flex-row items-center space-x-2 transition-colors duration-100",
    )}
  >
    Mark Evers
  </Link>
);
