import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FilterPj } from "./FilterPj"
import Popover from '@material-ui/core/Popover';
const useStyles = makeStyles(theme => ({
  button: {
    fontSize: "0.1rem",
    width: "10%",
    marginBottom: "1%"
  }
}));

export const PaperSearchContent = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Wrapper>
      <BorderContent>
        <SearchInput></SearchInput>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={handleClick}
          >
          Filter
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <FilterPj />
        </Popover>
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
