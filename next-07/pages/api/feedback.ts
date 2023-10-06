import type { NextApiRequest, NextApiResponse } from "next";

type FeedbackData = {
  name?: string;
  email?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;
  const { name, email, message } = query;

  console.log("name", name);
  console.log("email", email);
  console.log("message", message);

  res.status(200).json({ name, email, message });
}
