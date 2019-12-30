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
import { MemberSortTable } from "./MemberSortTable"

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addNewTasks = (title, description) => {
    const newTasks = tasks.concat({ title: title, description: description });
    setTasks(newTasks);
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
                <PaperSearchContent
                  key="project"
                />
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
                <PaperSearchContent
                  key="member"
                />
                <PaperBody>
                  <AddButton message="メンバーを追加する" />
                  <MemberSortTable></MemberSortTable>
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
