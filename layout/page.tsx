import { Inter } from "@next/font/google";
import localFont from "@next/font/local";

import { LayoutProps } from "../interfaces/LayoutProps";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const basementGrotesque = localFont({
  src: "../public/fonts/BasementGrotesque.otf",
  variable: "--font-basement-grotesque",
});

const Page = ({ children }: LayoutProps) => {
  return (
    <div className={`${basementGrotesque.variable} ${inter.variable}`}>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="page-wrap">{children}</main>
          <footer className="bg-blue-500">footer</footer>
        </div>
      </div>
    </div>
  );
};

export default Page;
