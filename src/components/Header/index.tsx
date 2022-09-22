import logo from "@assets/logo.svg";
import { useBasket } from "@contexts/BasketContext";
import Image from "next/future/image";
import { ShoppingBag } from "phosphor-react";
import { Container, Basket } from "./header.styles";

function Header() {
  const { items, toggleSummary } = useBasket();

  return (
    <Container>
      <Image src={logo} alt="Ignite Shop" />
      <Basket onClick={toggleSummary}>
        <ShoppingBag color="#fff" size={26} />
        {items.length > 0 && <div>{items.length}</div>}
      </Basket>
    </Container>
  );
}

export { Header };
