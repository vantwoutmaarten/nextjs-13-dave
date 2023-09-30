export default async function getUsers(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}
