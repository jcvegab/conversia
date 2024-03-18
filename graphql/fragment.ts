import { gql } from '@apollo/client';

export const USER_FRAGMENT = gql`
  fragment userFragment on User {
    id
    fullName
    email
    imageUrl
    createdAt
    updatedAt
  }
`;
