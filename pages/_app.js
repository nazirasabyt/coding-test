import "../styles/globals.scss";
import { AuthContextProvider } from "../context/auth_context";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

function MyApp({ Component, pageProps }) {
  const supportedChainIds = [100, 117];
  const connectors = {
    injected: {},
  };
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
