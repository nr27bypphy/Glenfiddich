import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { SearchContent } from "../../components/molecules/SearchContent";
import { GrPaper } from "../../components/molecules/GrPaper";
import { PaperHeader } from "../../components/molecules/PaperHeader";
import { PaperSearchContent } from "../../components/organisms/PaperSearchContent";
import { PaperBody } from "../../components/atoms/PaperBody";
import { AddButton } from "../../components/atoms/AddButton";
import { DashboardTable } from "../../components/organisms/DashboardTable";
import { ProjectThead } from "../../components/molecules/ProjectThead";
import { ProjectTableTr } from "../../components/molecules/ProjectTableTr";
import { MemberTableTr } from "../../components/molecules/MemberTableTr";
import DescriptionIcon from "@material-ui/icons/Description";
import PeopleIcon from "@material-ui/icons/People";
import { AddProjectModal } from "../../components/organisms/AddProjectModal";
import { AddUserModal } from "../../components/organisms/AddUserModal";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";

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

const USERS = gql`
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

export const DashboardContainer = props => {
  const classes = useStyles();
  // モーダル表示の状態を管理する
  const [projectOpen, setProjectOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const [tasks, setTasks] = useState(props.tasks);
  const [addTask] = useMutation(ADD_TASK);
  const [addUser] = useMutation(ADD_USER, {
    update(cache, { data: { addUser } }) {
      // 本当はここで cache.writeQuery を使っていい感じに users のリストを更新したい
      // const { users } = cache.readQuery({ query: USERS });
    }
  });

  const { loading, error, data } = useQuery(USERS);
  const [usersNode, setUsersNode] = useState([]);

  useEffect(() => {
    if (data) {
      setUsersNode(data.users.edges);
    }
  }, [data]);

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
    })
      .then(result => {
        // ユーザーの一覧に追加したメンバーを表示させるため
        setUsersNode(usersNode.concat({ node: result.data.addUser.user }));
      })
      .catch(e => {
        // error message の配列
        // @todo 取得したエラーメッセージを modal 上で表示するように修正する
        const errorMessages = e.graphQLErrors;
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
                    handleClick={() => setProjectOpen(true)}
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
                    handleClick={() => setUserOpen(true)}
                  />
                  <DashboardTable>
                    <tbody>
                      {usersNode &&
                        usersNode.map((userNode, index) => {
                          return (
                            <MemberTableTr user={userNode.node} key={index} />
                          );
                        })}
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
        handleClose={() => setProjectOpen(false)}
        addNewTasks={(title, description) => addNewTasks(title, description)}
      />
      <AddUserModal
        open={userOpen}
        handleClose={() => setUserOpen(false)}
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
