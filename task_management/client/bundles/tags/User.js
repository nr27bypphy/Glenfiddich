import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation(
    $name: String!
    $email: String!
    $role: Int!
    $password: String!
    $passwordConfirmation: String!
  ) {
    createUser(
      input: {
        name: $name
        email: $email
        role: $role
        password: $password
        passwordConfirmation: $passwordConfirmation
      }
    ) {
      user {
        id
        name
        role
      }
    }
  }
`;

export const USERS = gql`
  query {
    users {
      edges {
        node {
          id
          email
          name
          role
        }
      }
    }
  }
`;

// ユーザー削除で使用する
export const DESTROY_USER = gql`
  mutation($id: ID!, $currentUserId: Int!) {
    destroyUser(input: { id: $id, currentUserId: $currentUserId }) {
      users {
        id
        name
        email
        role
      }
    }
  }
`;
