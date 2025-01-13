import { languageMiddleware } from "./middleware/languageMiddleware";
import { themeMiddleware } from "./middleware/themeMiddleware";

export function middleware(request) {
  const languageResponse = languageMiddleware(request);
  if (languageResponse) {
    return languageResponse;
  }

  const themeResponse = themeMiddleware(request);
  return themeResponse;
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico).*)"],
};
