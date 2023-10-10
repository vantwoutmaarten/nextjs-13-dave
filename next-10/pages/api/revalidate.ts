import { revalidate } from "./../../app/page";
// http://localhost:3000/api/revalidate?path=/&secret=a823ca2f6089ccb6a61f5e086c5ceac3

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const path = req.query.path as string;

  await res.revalidate(path);

  return res.status(200).json({ revalidated: true });
}
