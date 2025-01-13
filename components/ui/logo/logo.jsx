"use server";

import Link from "next/link";
import { playwriteIN } from "public/fonts/fonts";
import clsx from "clsx";

export const Logo = async ({ lang }) => (
  <Link href={`/${lang}/`}>
    <span
      className={clsx(
        playwriteIN.className,
        "select-none rounded-full border-2 border-slate-800 bg-slate-100/5 p-4 text-xl transition-colors duration-75 hover:bg-slate-100/10 active:bg-slate-100/20 dark:border-slate-100",
      )}
    >
      Mark Evers
    </span>
  </Link>
);
