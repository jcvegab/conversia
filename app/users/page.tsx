import Container from '@/components/Container';
import { getUsers } from './actions';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ limit?: number; offset?: number }>;
}) {
  const resolved = await searchParams;
  const limit = Number(resolved.limit) || 10;
  const offset = Number(resolved.offset) || 0;
  const users = await getUsers(limit, offset);

  return (
    <Container>
      <h1 className="text-gray-800 dark:text-white">Dashboard</h1>
      {users.map((user) => (
        <p key={user.id}>
          <span>{user.fullName}</span>&nbsp;
          <span>{user.email}</span>
        </p>
      ))}
    </Container>
  );
}
