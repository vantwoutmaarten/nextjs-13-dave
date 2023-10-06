// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { limiter } from "./config/limiter";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const remaining = await limiter.removeTokens(1);
  console.log("remaingin", remaining);

  const origin = req.headers.origin;
  console.log("origin", origin);

  if (remaining < 0) {
    res.status(429).json({ message: "Too many requests" });
  }

  res.status(200).json({ name: "Hello nexxttt" });
}
