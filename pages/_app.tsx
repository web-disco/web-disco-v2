import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { SplitText } from "gsap/dist/SplitText";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";
import "@splidejs/react-splide/css";

import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

const Page = dynamic(() => import("../layout/page"));

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
}

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  useIsomorphicLayoutEffect(() => {
    ScrollSmoother.create({
      content: "#smooth-content",
      wrapper: "#smooth-wrapper",
      smooth: 1,
    });
  }, []);

  const getLayout =
    Component.getLayout || ((page: ReactNode) => <Page>{page}</Page>);

  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default MyApp;
