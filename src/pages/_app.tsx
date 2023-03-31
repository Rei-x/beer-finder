import { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "../styles/globals.css";
import { useState } from "react";
import { Provider } from "jotai";
import { ScrollToTop } from "@/components/ScrollToTop";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import { Router } from "next/router";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ScrollToTop />
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
