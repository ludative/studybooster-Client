import gql from "graphql-tag";

export const SIGN_IN = gql`
  mutation($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user {
        ... on User {
          id
          email
          nickname
          introduction
        }
      }
    }
  }
`;
