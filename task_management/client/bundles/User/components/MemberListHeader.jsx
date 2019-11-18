import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    alignSelf: "flex-start",
    margin: 0,
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
  }
}));

export const MemberListHeader = props => {
  const classes = useStyles();
  return (
    <Wrapper>
      <TitleButtonColumn>
        <Title>Manage Member</Title>
        <Button variant="contained" className={classes.button}>
          Invite people
        </Button>
      </TitleButtonColumn>
      <SearchFormContainer>
        <SearchIcon className={classes.searchIcon} />
        <InputBase className={classes.input} />
      </SearchFormContainer>
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
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  width: 80%;
  align-self: flex-start;
`;

const SearchFormContainer = styled.div`
  height: 4rem;
  background-color: #fff;
  display: flex;
`;
