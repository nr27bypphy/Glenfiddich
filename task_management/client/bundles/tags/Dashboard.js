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
      hurryTaskCount
      middleTaskCount
      affordTaskCount
      workspaceMember {
        id
        user {
          name
        }
      }
    }
  }
`;
