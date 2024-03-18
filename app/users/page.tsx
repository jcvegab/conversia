import { cache } from 'react';

import Container from '@/components/Container';

import createApolloClient from '@/graphql/main';
import { GET_ALL_USERS } from '@/graphql/queries';

type User = {
  id: string;
  fullName: string;
  email: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export const getUsers = cache(async (limit = 10, offset = 0) => {
  const client = createApolloClient();
  const { data } = await client.query<{ users: User[] }>({
    query: GET_ALL_USERS,
    variables: { limit, offset },
  });
  return data.users;
});

export default async function Page({
  params: { limit, offset },
}: {
  params: { limit: number; offset: number };
}) {
  const users = await getUsers(10, 0);

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
