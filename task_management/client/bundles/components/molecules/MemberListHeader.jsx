import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { SearchInput } from "../molecules/SearchInput"

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
    alignSelf: "flex-start",
    color: "#fff",
    backgroundColor: "#5761CC"
  },
  searchIcon: {
    height: "4rem",
    width: "50px"
  },
  input: {
    alignItems: "center",
    height: "4rem",
    width: "90%",
    fontSize: "2rem"
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

export const MemberListHeader = props => {
  const classes = useStyles();
  return (
    <Wrapper>
      <TitleButtonColumn>
        <Title>メンバーリスト</Title>
        <Button variant="contained" className={classes.button}>
          Invite Member
        </Button>
      </TitleButtonColumn>
      <SearchInput
        className={classes.searchInput}
        placeholder="Search user"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 9rem;
  background-color: #f2f2f2;
  padding-top: 3rem;
  padding-bottom: 2rem;
  padding-right: 5%;
  padding-left: 5%;
`;

const TitleButtonColumn = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;
