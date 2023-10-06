import { NextApiRequest, NextApiResponse } from "next";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://example.com"]
    : ["http://localhost:3000", "https://www.google.com"];

export function middleware(request: NextApiRequest, response: NextApiResponse) {
  const origin = request.headers.origin;

  if (origin && !allowedOrigins.includes(origin)) {
    console.log("origin", origin);
    return response.status(400).json({ message: "Bad request" });
  }
}

// // See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
};
