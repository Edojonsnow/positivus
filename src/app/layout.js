import localFont from "next/font/local";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const spg = Space_Grotesk({
  src: "./fonts/SpaceGrotesk.woff2",
  variable: "--font-spg",

  subsets: ["latin"],

  weight: ["300"],
});
export const metadata = {
  title: "Positivus",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${spg.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
