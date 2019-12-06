import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Moment from "react-moment";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

export const TaskTable = props => {
  const classes = useStyles();
  const tasks = props.tasks;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task 名</TableCell>
            <TableCell align="right">ステータス</TableCell>
            <TableCell align="right">期限日</TableCell>
            <TableCell align="right">Project名</TableCell>
            <TableCell align="right">部署タグ</TableCell>
            <TableCell align="right">コメント</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {task.title}
              </TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">
                <Moment format="YYYY/MM/DD">{task.deadline}</Moment>
              </TableCell>
              <TableCell align="right">{task.description}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
