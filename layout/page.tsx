import dynamic from "next/dynamic";

import { LayoutProps } from "../interfaces/LayoutProps";

const Header = dynamic(() => import("../components/header"));

const Page = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Page;
