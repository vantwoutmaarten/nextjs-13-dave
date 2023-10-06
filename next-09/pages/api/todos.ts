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
    case "DELETE":
      await DELETE(req, res);
      break;
    case "POST":
      await POST(req, res);
      break;
    case "PUT":
      await PUT(req, res);
      break;
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;

  const fetchedRes = await fetch(DATA_SOURCE_URL);

  const todos: Todo[] = await fetchedRes.json();

  const origin = req.headers.origin;
  return res
    .setHeader("Access-Control-Allow-Origin", origin || "*")
    .status(200)
    .json(todos);
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const { query, body } = req;
  const { id } = body;

  if (!id) {
    return res.status(400).json({ message: "Missing id" });
  }

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-KEY": API_KEY,
    },
  });

  return res.status(200).json({ message: `Todo with id ${id} deleted` });
}
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { userId, title } = body;

  if (!userId || !title) {
    return res.status(400).json({ message: "Missing id" });
  }

  const postResponse = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-KEY": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });

  return res
    .status(200)
    .json({ message: `Todo with userId ${userId} and title ${title}` });
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { userId, title, id, completed } = body;

  if (!userId || !title || !id || typeof completed !== "boolean") {
    return res.status(400).json({ message: "Missing required data" });
  }

  const putResponse = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-KEY": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  });

  return res.status(200).json({
    message: `UPDATING Todo with userId ${userId} and title ${title}`,
  });
}
