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
      "hover:text-primary-200 active:text-primary-300 flex select-none flex-row items-center space-x-2 transition-colors duration-100",
    )}
  >
    Mark Evers
  </Link>
);
