import gql from "graphql-tag";

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user {
        id
        email
        nickname
        introduction
        profileImage
        isAdmin
        deleted
        isValidEmail
        createdAt
        updatedAt
      }
    }
  }
`;
