import { LayoutProps } from "../interfaces/LayoutProps";

const Page = ({ children }: LayoutProps) => {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main id="page-wrap">{children}</main>
      </div>
    </div>
  );
};

export default Page;
