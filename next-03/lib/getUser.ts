export default async function getUsers(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    return undefined;
  }
  return res.json();
}
