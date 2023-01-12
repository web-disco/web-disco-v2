import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { LayoutProps } from "../interfaces/LayoutProps";

const Cursor = dynamic(() => import("../components/cursor"));
const Header = dynamic(() => import("../components/header"));

const Page = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <>
        {/* <Cursor /> */}
        {!router.pathname.includes("studio") && <Header />}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>{children}</main>
            <footer className="text-xl text-blue-500 bg-orange h-screen z-10 relative">
              footer
            </footer>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
};

export default Page;
