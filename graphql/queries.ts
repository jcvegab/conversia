import { gql } from '@apollo/client';
import { USER_FRAGMENT } from './fragment';

export const GET_ALL_USERS = gql`
  query getUser($limit: Int, $offset: Int) {
    users(limit: $limit, offset: $offset) {
      ...userFragment
    }
  }

  ${USER_FRAGMENT}
`;
