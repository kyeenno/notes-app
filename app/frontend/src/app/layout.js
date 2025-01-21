import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Notes App",
  description: "Notes App built with Next.js, Tailwind CSS, and Remix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
