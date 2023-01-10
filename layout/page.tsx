import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";

import { LayoutProps } from "../interfaces/LayoutProps";

const Header = dynamic(() => import("../components/header"));

const Page = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Page;
