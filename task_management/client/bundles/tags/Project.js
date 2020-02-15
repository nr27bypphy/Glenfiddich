import gql from "graphql-tag";

export const CREATE_PROJECT = gql`
  mutation($title: String!, $description: String!, $workspaceMemberId: Int) {
    createProject(
      input: { title: $title, description: $description, workspaceMemberId: $workspaceMemberId }
    ) {
      project {
        title
        description
        workspaceMemberId
      }
    }
  }
`;
