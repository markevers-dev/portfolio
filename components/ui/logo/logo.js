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
      "group select-none transition-colors duration-200 motion-blur-in-sm hover:text-primary-600 active:text-primary-400 dark:hover:text-primary-200 dark:active:text-primary-300",
    )}
  >
    Mark Evers
    <span className="block h-0.5 max-w-0 rounded-full bg-primary-600 transition-all duration-200 group-hover:max-w-full group-active:bg-primary-400 dark:bg-primary-200 group-active:dark:group-active:bg-primary-300" />
  </Link>
);
