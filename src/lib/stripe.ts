import Stripe from "stripe";

const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
  apiVersion: "2022-08-01",
  appInfo: {
    name: "Ignite Shop",
  },
});

export { stripe };
