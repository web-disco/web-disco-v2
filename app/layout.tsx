import "./globals.css";
import { Inter } from "@next/font/google";
import localFont from "@next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const basementGrotesque = localFont({
  src: "../public/fonts/BasementGrotesque.otf",
  variable: "--font-basement-grotesque",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${basementGrotesque.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
