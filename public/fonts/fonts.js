import { Montserrat, Inter, Playwrite_IN } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const playwriteIN = Playwrite_IN({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
