import "../styles/globals.scss";
import { Header } from "../components/modules/header/header.component";
import { Provider } from "react-redux";
import Head from "next/head";
import React from "react";
import store from "../store";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Star Wars</title>
        <meta name="description" content="Star Wars characters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
export default MyApp;
