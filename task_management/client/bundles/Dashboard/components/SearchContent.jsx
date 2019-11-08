import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  input: {
    marginLeft: theme.spacing(1),
    height: "3rem",
    lineHeight: "3remm",
    fontSize: "1.5rem"
  },
  searchIcon: {
    height: "3rem",
    width: "7.5%"
  }
}));

export const SearchContent = props => {
  const classes = useStyles();

  return (
    <Wrapper>
      <SearchBox>
        <SearchIcon className={classes.searchIcon} />
        <InputBase className={classes.input} placeholder="search anything" />
      </SearchBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5rem 0;
`;

const SearchBox = styled.div`
  width: 100%;
  display: flex;
  height: 3rem;
`;
