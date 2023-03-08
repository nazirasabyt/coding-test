import "../styles/globals.scss";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { AuthContextProvider } from "../context/auth_context";

function getLibrary(provider) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
