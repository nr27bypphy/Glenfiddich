import gql from "graphql-tag";

export const ADD_TASK = gql`
  mutation($title: String!, $userId: Int!, $description: String!) {
    createTask(
      input: { title: $title, userId: $userId, description: $description }
    ) {
      task {
        id
        title
        userId
        description
      }
    }
  }
`;
