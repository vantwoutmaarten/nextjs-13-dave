import { NextApiResponse, NextApiRequest } from "next";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

const API_KEY: string = process.env.DATA_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await GET(req, res);
      break;
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;

  const { id } = query;

  if (!id) {
    return res.status(404).json({ message: `id ${id} not found` });
  }

  const fetchedRes = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const todo: Todo = await fetchedRes.json();

  if (!todo) {
    return res.status(404).json({ message: `Todo with id ${id} not found` });
  }

  return res.status(200).json(todo);
}
