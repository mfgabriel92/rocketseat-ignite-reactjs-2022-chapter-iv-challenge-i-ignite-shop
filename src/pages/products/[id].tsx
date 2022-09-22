import { Button } from "@components/Button";
import { useBasket } from "@contexts/BasketContext";
import { Container, DetailsContainer, ImageContainer } from "@styles/pages/product.styles";
import { ProductProps } from "@typings/product";
import axios from "axios";
import { stripe } from "lib/stripe";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Stripe from "stripe";

interface ProductsProps {
  product: ProductProps;
}

function Products({ product }: ProductsProps) {
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [isInBasket, setIsInBasket] = useState<boolean>(false);
  const { isFallback } = useRouter();
  const { items, placeItemInBasket } = useBasket();

  useEffect(() => {
    const isInBasket = items.findIndex((item) => item.id === product?.id) !== -1;
    setIsInBasket(isInBasket);
  }, [items, product?.id]);

  async function handlePlaceItemInBasket() {
    if (isInBasket) {
      return;
    }
    placeItemInBasket(product);
  }

  if (isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>Ignite Shop | {product.name}</title>
      </Head>

      <Container>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <DetailsContainer>
          <h1>{product.name}</h1>
          <strong>{product.price}</strong>
          <p>{product.description}</p>
          <Button disabled={isCheckingOut || isInBasket} onClick={handlePlaceItemInBasket}>
            {isInBasket ? <span>In basket</span> : <span>Put in the basket</span>}
          </Button>
        </DetailsContainer>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const response = await stripe.products.retrieve(String(params?.id), {
    expand: ["default_price"],
  });
  const price = response.default_price as Stripe.Price;
  const product = {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    price: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format((price.unit_amount || 0) / 100),
    priceId: price.id,
    description: response.description,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Products;
