import { ReactNode, useEffect } from "react";
import dynamic from "next/dynamic";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import Script from "next/script";

import "../styles/globals.css";

const Page = dynamic(() => import("../layout/page"));

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout =
    Component.getLayout || ((page: ReactNode) => <Page>{page}</Page>);

  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default MyApp;
