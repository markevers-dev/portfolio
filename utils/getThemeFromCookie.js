"use server";

import { cookies } from "next/headers";

export const getThemeFromCookies = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("theme")?.value || "light";
};
