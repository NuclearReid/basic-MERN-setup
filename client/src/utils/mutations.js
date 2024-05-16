import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser(
        $email: String!
        $password: String!
    ) {
        addUser(
            email: $email
            password: $password
        ) {
            token
            User {
                _id
            }
        }
    }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      User {
        email
      }
    }
  }
`;