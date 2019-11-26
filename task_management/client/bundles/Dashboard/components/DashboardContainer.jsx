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
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, concat } from "apollo-link";
// import { useMutation } from "react-apollo-hooks";
// import { gql } from "apollo-boost";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
// import { ApolloProvider } from "@apollo/react-hooks";
const useStyles = makeStyles(theme => ({
  projectPaper: {
    paddingBottom: "10px"
  },
  icon: {
    flex: "1",
    height: "100%"
  }
}));

export const DashboardContainer = props => {
  const classes = useStyles();
  const [tasks, setTasks] = useState(props.tasks);
  const [open, setOpen] = useState(false);
  // const [addTask, { data }] = useMutation(ADD_TASK);

  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: "http://localhost:3000/api/v1/graphql"
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const csrfToken = ReactOnRails.authenticityToken();

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        "X-CSRF-Token": csrfToken
      }
    });
    return forward(operation);
  });

  const client = new ApolloClient({
    cache: cache,
    link: concat(authMiddleware, link)
  });

  client
    .mutate({
      mutation: gql`
        mutation {
          testField
        }
      `
    })
    .then(result => console.log(result));

  const handleClose = () => {
    setOpen(false);
  };

  const addNewTasks = (title, description) => {
    const newTasks = tasks.concat({ title: title, description: description });
    setTasks(newTasks);
    // addTask();
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
                    handleClick={() => handleClickOpen()}
                  />
                  <DashboardTable>
                    <ProjectThead />
                    <tbody>
                      {tasks.map(task => {
                        return <ProjectTableTr task={task} />;
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
                  <AddButton message="メンバーを追加する" />
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
        open={open}
        handleClose={() => handleClose()}
        addNewTasks={(title, description) => addNewTasks(title, description)}
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
