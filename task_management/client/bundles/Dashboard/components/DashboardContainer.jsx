import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { SearchContent } from "./SearchContent";
import { GrPaper } from "./GrPaper";
import { PaperHeader } from "./PaperHeader";
import { PaperSearchContent } from "./PaperSearchContent";
import { PaperBody } from "./PaperBody";
import { AddButton } from "./AddButton";
import { DashboardTable } from "./DashboardTable";
import { ProjectThead } from "./ProjectThead";
import { ProjectTableTr } from "./ProjectTableTr";
import { MemberTableTr } from "./MemberTableTr";
import DescriptionIcon from "@material-ui/icons/Description";
import PeopleIcon from "@material-ui/icons/People";
import { AddProjectModal } from "./AddProjectModal";
import { AddUserModal } from "./AddUserModal";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const useStyles = makeStyles(theme => ({
  projectPaper: {
    paddingBottom: "10px"
  },
  icon: {
    flex: "1",
    height: "100%"
  }
}));

const ADD_TASK = gql`
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

const ADD_USER = gql`
  mutation(
    $name: String!
    $email: String!
    $role: Int!
    $password: String!
    $passwordConfirmation: String!
  ) {
    addUser(
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

export const DashboardContainer = props => {
  const classes = useStyles();
  const [tasks, setTasks] = useState(props.tasks);
  const [projectOpen, setProjectOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [addTask, { data }] = useMutation(ADD_TASK);
  const [addUser, { userData }] = useMutation(ADD_USER);
  const [users, setUsers] = useState(props.users);

  const handleProjectOpen = () => {
    setProjectOpen(true);
  };
  const handleProjectClose = () => {
    setProjectOpen(false);
  };
  const handleUserOpen = () => {
    setUserOpen(true);
  };
  const handleUserClose = () => {
    setUserOpen(false);
  };

  const addNewTasks = (title, description) => {
    addTask({
      variables: { title: title, userId: 1, description: description }
    });
    const newTasks = tasks.concat({
      title: title,
      description: description
    });
    setTasks(newTasks);
  };

  const addNewUser = (name, email, role, password, passwordConfirmation) => {
    addUser({
      variables: {
        name: name,
        email: email,
        role: role,
        password: password,
        passwordConfirmation: passwordConfirmation
      }
    });
  };

  return (
    <>
      <BackgroundThema>
        <Content>
          <SearchContent />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <GrPaper className={classes.projectPaper}>
                <PaperHeader title="Project">
                  <DescriptionIcon className={classes.icon} />
                </PaperHeader>
                <PaperSearchContent />
                <PaperBody>
                  <AddButton
                    message="プロジェクトを追加する"
                    handleClick={() => handleProjectOpen()}
                  />
                  <DashboardTable>
                    <ProjectThead />
                    <tbody>
                      {tasks.map((task, index) => {
                        return <ProjectTableTr task={task} key={index} />;
                      })}
                    </tbody>
                  </DashboardTable>
                </PaperBody>
              </GrPaper>
            </Grid>
            <Grid item xs={6}>
              <GrPaper>
                <PaperHeader title="Member">
                  <PeopleIcon className={classes.icon} />
                </PaperHeader>
                <PaperSearchContent />
                <PaperBody>
                  <AddButton
                    message="メンバーを追加する"
                    handleClick={() => handleUserOpen()}
                  />
                  <DashboardTable>
                    <tbody>
                      <MemberTableTr />
                    </tbody>
                  </DashboardTable>
                </PaperBody>
              </GrPaper>
            </Grid>
          </Grid>
        </Content>
      </BackgroundThema>
      {/* プロジェクト追加モーダル */}
      <AddProjectModal
        open={projectOpen}
        handleClose={() => handleProjectClose()}
        addNewTasks={(title, description) => addNewTasks(title, description)}
      />
      <AddUserModal
        open={userOpen}
        handleClose={() => handleUserClose()}
        addNewUser={(name, email, role, password, passwordConfirmation) =>
          addNewUser(name, email, role, password, passwordConfirmation)
        }
      />
    </>
  );
};

const BackgroundThema = styled.div`
  background-image: url("../../assets/dashboard-background.png");
  background-size: cover;
`;

const Content = styled.div`
  width: 85%;
  margin: 0 auto;
`;
