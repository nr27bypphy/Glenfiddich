import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { GrPaper } from "../../components/molecules/GrPaper";
import { PaperHeader } from "../../components/molecules/PaperHeader";
import { PaperSearchContent } from "../../components/organisms/PaperSearchContent";
import { PaperBody } from "../../components/atoms/PaperBody";
import { AddButton } from "../../components/atoms/AddButton";
import DescriptionIcon from "@material-ui/icons/Description";
import PeopleIcon from "@material-ui/icons/People";
import { AddProjectModal } from "../../components/organisms/AddProjectModal";
import { AddWorkspaceMemberModal } from "../../components/organisms/AddWorkspaceMemberModal";
import { MemberSortTable } from "../../components/organisms/MemberSortTable";
import { ProjectSortTable } from "../../components/organisms/ProjectSortTable";
import { SearchInput } from "../../components/molecules/SearchInput";

const useStyles = makeStyles(theme => ({
  projectPaper: {
    paddingBottom: "10px"
  },
  icon: {
    flex: "1",
    height: "100%"
  },
  searchForm: {
    padding: '1.5rem 0'
  }
}));

export const DashboardContainer = ({
  postProject,
  workspaceMembers,
  projects,
  invitationWorkspaceMember,
  invitationErrorMessage
}) => {
  const classes = useStyles();
  // モーダル表示の状態を管理する
  const [projectOpen, setProjectOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  return (
    <>
      <BackgroundThema>
        <Content>
          <div className={classes.searchForm}>
            <SearchInput
              placeholder="search anything"
            />
          </div>
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
                  <ProjectSortTable
                    projects={projects}
                  />
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
                  <MemberSortTable
                    workspaceMembers={workspaceMembers}
                  />
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
        postProject={postProject}
        workspaceMembers={workspaceMembers}
      />
      <AddWorkspaceMemberModal
        open={userOpen}
        handleClose={() => setUserOpen(false)}
        invitationWorkspaceMember={invitationWorkspaceMember}
        error={invitationErrorMessage}
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
