import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "react-modal-hook";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}

export default MyApp;
