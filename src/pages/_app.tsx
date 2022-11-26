import { Provider, useStore } from "react-redux";
import "../styles/index.css";
import { store } from "../reduxStore";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps}></Component>
    </Provider>
  );
}

export default MyApp;
