import { Provider, useStore } from "react-redux";
import "../styles/index.css";
import { store } from "../reduxStore";
import { SessionProvider } from "next-auth/react";
import React from "react";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps, session }) {
  return (
    //@ts-ignore

    <React.Suspense fallback={<div>Loading....</div>}>
      <Provider store={store}>
        <SessionProvider session={session}>
          <Component {...pageProps}></Component>
        </SessionProvider>
      </Provider>
    </React.Suspense>
  );
}

export default MyApp;
