import gql from "graphql-tag";

export const DASHBOARD_PAGE = gql`
  query {
    workspaceMembers {
      id
      user {
        name
      }
    }
    projects {
      title
      description
      deadline
      workspaceMember {
        id
        user {
          name
        }
      }
    }
  }
`;
