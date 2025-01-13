"use server";

import Link from "next/link";
import { montserrat } from "public/fonts/fonts";
import clsx from "clsx";

export const Logo = async ({ lang, size = "sm" }) => (
  <Link
    href={`/${lang}/`}
    className={clsx(
      montserrat.className,
      { "text-md p-2": size === "sm" },
      { "p-4 text-xl": size === "xl" },
      "select-none bg-slate-100/10 transition-colors duration-75 hover:bg-slate-100/20 active:bg-slate-100/30 dark:border-slate-100",
    )}
  >
    Mark Evers
  </Link>
);
