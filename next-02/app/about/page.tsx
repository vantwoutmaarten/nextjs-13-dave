import { error } from "console";
import Link from "next/link";

export default function About() {
  // throw new Error("Not Today!");
  return (
    <>
      <h1>About</h1>
      <Link href="/">Link to Home Page</Link>
    </>
  );
}
