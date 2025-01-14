import Link from "next/link";
import Image from "next/image";
import { montserrat, playwriteIN } from "public/fonts/fonts";
import clsx from "clsx";

export const Logo = ({ lang, size = "sm" }) => (
  <Link
    href={`/${lang}/`}
    className={clsx(
      montserrat.className,
      { "text-md": size === "sm" },
      { "text-xl": size === "xl" },
      "hover:text-primary-200 active:text-primary-300 select-none transition-colors duration-100",
    )}
  >
    Mark Evers
  </Link>
);
