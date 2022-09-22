import { Container, Product } from "@styles/pages/home.styles";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { stripe } from "lib/stripe";
import { GetStaticProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface HomeProps {
  products: ProductProps[];
}

function Home({ products }: HomeProps) {
  const [slider] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Ignite Shop | Home</title>
      </Head>

      <Container ref={slider} className="keen-slider">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>
            </Product>
          </Link>
        ))}
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const defaultPrice = product.default_price as Stripe.Price;
    const price = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format((defaultPrice.unit_amount || 0) / 100);

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Home;
