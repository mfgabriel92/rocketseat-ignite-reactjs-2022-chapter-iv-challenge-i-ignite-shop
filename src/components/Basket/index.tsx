import { Button } from "@components/Button";
import { useBasket } from "@contexts/BasketContext";
import Image from "next/future/image";
import {
  Close,
  Container,
  Item,
  ItemDescription,
  Items,
  PriceDescription,
  TotalPrice,
} from "./basket.styles";

function Basket() {
  const { items, isSummaryOpen, isCheckingOut, toggleSummary, buyNow } = useBasket();
  const totalPrice = items.reduce((acc, item) => {
    const price = item.price.substring(1, item.price.length);
    acc += Number(price);
    return acc;
  }, 0);

  async function handleBuyNow() {
    const priceIds: string[] = [];
    items.map((i) => priceIds.push(i.priceId));
    buyNow(priceIds);
  }

  return (
    <Container
      style={{
        transform: isSummaryOpen ? "translateX(0%)" : "translateX(200%)",
      }}
    >
      <Close onClick={toggleSummary} />
      <h3>Basket</h3>
      <Items>
        {items.map((item) => (
          <Item key={item.id}>
            <Image src={item.imageUrl} width={101} height={93} alt={item.name} />
            <ItemDescription>
              <p>{item.name}</p>
              <strong>{item.price}</strong>
              <span>Remove</span>
            </ItemDescription>
          </Item>
        ))}
      </Items>
      <PriceDescription>
        <span>Quantity</span>
        <span>{items.length} item(s)</span>
      </PriceDescription>
      <PriceDescription>
        <strong>Total</strong>
        <TotalPrice>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(totalPrice)}
        </TotalPrice>
      </PriceDescription>
      <Button onClick={handleBuyNow} disabled={isCheckingOut}>
        Buy now
      </Button>
    </Container>
  );
}

export { Basket };
