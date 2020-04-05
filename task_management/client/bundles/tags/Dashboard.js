import gql from "graphql-tag";

export const DASHBOARD_PAGE = gql`
  query {
    workspaceMembers {
      id
      user {
        name
      }
      hurryTaskCount
      middleTaskCount
      affordTaskCount
      notApproveTaskCount
    }
    projects {
      title
      description
      deadline
      hurryTaskCount
      middleTaskCount
      affordTaskCount
      notApproveTaskCount
      workspaceMember {
        id
        user {
          name
        }
      }
    }
  }
`;
