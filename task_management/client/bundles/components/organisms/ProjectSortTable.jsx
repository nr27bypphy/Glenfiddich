import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ProjectSortTableHead } from "./ProjectSortTableHead";

function createData(
  title,
  description,
  member,
  hurryTaskCount,
  middleTaskCount,
  affordTaskCount,
  notApproveTaskCount
) {
  return {
    title,
    description,
    member,
    hurryTaskCount,
    middleTaskCount,
    affordTaskCount,
    notApproveTaskCount
  };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  } else if (b[orderBy] > a[orderBy]) {
    return 1;
  } else {
    return 0;
  }
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) {
      return order;
    } else {
      return a[1] - b[1];
    }
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "41.5vw",
    marginLeft: "-3.15vw"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 400
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  red: {
    backgroundColor: "red",
    padding: 10,
    color: "white"
  },
  yellow: {
    backgroundColor: "yellow",
    padding: 10
  },
  green: {
    backgroundColor: "green",
    padding: 10,
    color: "white"
  },
  gray: {
    backgroundColor: "gray",
    padding: 10,
    color: "white"
  }
}));

ProjectSortTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

export const ProjectSortTable = ({ projects }) => {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("red");
  const [selected, setSelected] = useState([]);
  const [page] = useState(0);
  const rowDatas = projects.map(project =>
    createData(
      project.title,
      project.description,
      "",
      project.hurryTaskCount,
      project.middleTaskCount,
      project.affordTaskCount,
      project.notApproveTaskCount
    )
  );
  var [rowsPerPage] = useState(rowDatas.length);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = projects.map(n => n.title);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, title) => {
    const selectedIndex = selected.indexOf(title);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, title);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = title => selected.indexOf(title) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rowDatas.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          size={"medium"}
          aria-label="enhanced table"
        >
          <ProjectSortTableHead
            classes={classes}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={projects.length}
          />
          <TableBody>
            {stableSort(rowDatas, getSorting(order, orderBy)).map(
              (row, index) => {
                const isItemSelected = isSelected(row.title);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={event => handleClick(event, row.title)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={index}
                    selected={isItemSelected}
                  >
                    <TableCell align="right">{row.title}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.member}</TableCell>
                    <TableCell align="center" padding="none">
                      <span className={classes.red}>{row.hurryTaskCount}</span>
                    </TableCell>
                    <TableCell align="center" padding="none">
                      <span className={classes.yellow}>
                        {row.middleTaskCount}
                      </span>
                    </TableCell>
                    <TableCell align="center" padding="none">
                      <span className={classes.green}>
                        {row.affordTaskCount}
                      </span>
                    </TableCell>
                    <TableCell align="center" padding="none">
                      <span className={classes.gray}>
                        {row.notApproveTaskCount}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              }
            )}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={2} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};
