import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  name: string;
  instrument: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const { name, instrument } = query;

  res.status(200).json({ name, instrument });
}
