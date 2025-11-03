'use server';
import { cache } from 'react';

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
  return data?.users ?? [];
});
