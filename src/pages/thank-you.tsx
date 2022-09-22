import { Container, ImagesContainer, ImageContainer } from "@styles/pages/thank-you.styles";
import { ProductProps } from "@typings/product";
import { stripe } from "lib/stripe";
import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Stripe from "stripe";

interface PurchaseProps {
  productName: string;
  productImage: string;
}

interface ThankYouProps {
  customerName: string;
  summary: PurchaseProps[];
}

function ThankYou({ customerName, summary }: ThankYouProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop | Thank You</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Container>
        <h1>
          Thank you! <br /> Purchase successful
        </h1>

        <ImagesContainer>
          {summary.map(({ productName, productImage }) => (
            <ImageContainer key={productName}>
              <Image src={productImage} width={130} height={145} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <p>
          Yes! <strong>{customerName}</strong>, your purchase is on the way to your home.
        </p>

        <Link href="/">Back to home</Link>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const purchasedItems = session.line_items?.data as Stripe.LineItem[];
  const summary: any[] = [];

  purchasedItems?.map((item) => {
    const product = item.price?.product as Stripe.Product;

    return summary.push({
      productName: product.name,
      productImage: product.images[0],
    });
  });

  return {
    props: {
      customerName: session.customer_details?.name,
      summary,
    },
  };
};

export default ThankYou;
