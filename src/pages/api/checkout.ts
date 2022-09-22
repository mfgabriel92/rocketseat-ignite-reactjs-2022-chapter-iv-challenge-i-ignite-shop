import { stripe } from "lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceIds } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!priceIds) {
    return res.status(400).json({ error: "Price ID missing" });
  }

  const items: any[] = [];

  priceIds.map((id: string) => {
    return items.push({ price: id, quantity: 1 });
  });

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: items,
    success_url: `${process.env.URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.URL}`,
  });

  return res.status(201).json({ checkoutUrl: checkoutSession.url });
}

export default handler;
