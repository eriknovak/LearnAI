import type { AppProps } from "next/app";

import Header from "components/Header";
import Footer from "components/Footer";

import "styles/globals.scss";
import "styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="container px-4 sm:px-12 sm:mx-auto pt-32">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;