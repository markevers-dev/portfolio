import { cookies } from "next/headers";
import { themeCookieSettings } from "config/themeCookieSettings";

export async function POST(request) {
  const response = await request.json();
  const { theme } = response;

  const cookieStore = await cookies(request);
  cookieStore.set("theme", theme, themeCookieSettings);

  return new Response("Successfully set the theme", {
    status: 200,
  });
}
