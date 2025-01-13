import { NextResponse } from "next/server";
import { themeCookieSettings } from "config/themeCookieSettings";

export const themeMiddleware = (request) => {
  const theme = request.cookies.get("theme")?.value;

  const response = NextResponse.next();
  if (!theme) {
    const prefersDark =
      request.headers.get("sec-ch-prefers-color-scheme") === "dark";
    const selectedTheme = prefersDark ? "dark" : "light";

    response.cookies.set("theme", selectedTheme, themeCookieSettings);
  }

  return response;
};
