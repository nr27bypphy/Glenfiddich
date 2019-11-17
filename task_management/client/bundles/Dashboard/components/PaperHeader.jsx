import React from "react";
import styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  Icon: {
    flex: "1",
    height: "100%"
  },
  // flexbox の比率は纏めたかったので、Title もここで指定している
  Title: {
    flex: "4"
  },
  Option: {
    flex: "1",
    height: "100%"
  }
}));

export const PaperHeader = props => {
  const classes = useStyles();

  return (
    <Wrapper>
      {props.children}
      <Title className={classes.Title}>{props.title}</Title>
      <MoreHorizIcon className={classes.Option} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 2.5% 0;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 5rem;
`;
