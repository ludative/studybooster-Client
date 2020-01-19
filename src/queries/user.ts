import gql from "graphql-tag";

export const GET_USER_BY_ID = gql`
  query getUserById($id: Int!) {
    getUserById(id: $id) {
      ... on User {
        id
        email
        nickname
        introduction
      }
    }
  }
`;
