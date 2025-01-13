import { NextResponse } from "next/server";
import { supportedLanguages } from "../config/languages.js";

const defaultLanguage = supportedLanguages[0];

export const languageMiddleware = (request) => {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (supportedLanguages.includes(firstSegment))
    return createNextResponse(firstSegment);

  const acceptLanguage = request.headers.get("accept-language");
  const preferredLanguage = extractPreferredLanguage(acceptLanguage);
  const locale = supportedLanguages.includes(preferredLanguage)
    ? preferredLanguage
    : defaultLanguage;

  return redirectToLocale(request, locale);
};

const extractPreferredLanguage = (acceptLanguage) => {
  if (!acceptLanguage) return null;
  const [language] = acceptLanguage.split(",")[0].split("-");
  return language;
};

const redirectToLocale = (request, locale) => {
  const newPathname = `/${locale}${request.nextUrl.pathname}`;
  const url = request.nextUrl.clone();
  url.pathname = newPathname;

  const response = NextResponse.redirect(url);
  response.headers.set("x-locale", locale);
  return response;
};

const createNextResponse = (locale) => {
  const response = NextResponse.next();
  response.headers.set("x-locale", locale);
  return response;
};
