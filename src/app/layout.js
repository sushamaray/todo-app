import { Space_Grotesk, Lexend, Alef } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend"
});

const alef = Alef({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-alef"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${lexend.variable} ${alef.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
