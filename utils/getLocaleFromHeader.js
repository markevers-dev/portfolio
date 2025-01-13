"use server";

import { headers } from "next/headers";

export const getLocaleFromHeaders = async () => {
  const headerStore = await headers();
  return headerStore.get("x-locale");
};
