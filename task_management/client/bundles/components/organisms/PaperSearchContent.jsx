import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    fontSize: "0.1rem",
    width: "10%",
    marginBottom: "1%"
  }
}));

export const PaperSearchContent = props => {
  const classes = useStyles();

  return (
    <Wrapper>
      <BorderContent>
        <SearchInput></SearchInput>
        <Button variant="outlined" color="primary" className={classes.button}>
          Filter
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Sort
        </Button>
      </BorderContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 0.2rem;
`;

const BorderContent = styled.div`
  border-bottom: 1px solid;
  box-sizing: border-bottom;
  display: flex;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  width: 70%;
  font-size: 1.3rem;
`;
