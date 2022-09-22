import { Basket } from "@components/Basket";
import { Header } from "@components/Header";
import { BasketProvider } from "@contexts/BasketContext";
import { globalStyles } from "@styles/globals";
import { Container } from "@styles/pages/app.styles";
import type { AppProps } from "next/app";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <BasketProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
        <Basket />
      </Container>
    </BasketProvider>
  );
}

export default App;
