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
          isValidEmail
        }
      }
    }
  }
`;

export const SEND_MAIL_VALIDATION = gql`
    mutation sendMailValidation {
      sendMailValidation {
        isSuccess
      }
    }
`;

export const UPDATE_USER_IS_VALID_EMAIL = gql`
    mutation updateUserIsValidEmail($token: String!) {
      updateUserIsValidEmail(token: $token) {
        isSuccess
      }
    }
`;