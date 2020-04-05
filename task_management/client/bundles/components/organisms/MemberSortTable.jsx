import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { MemberSortTableHead } from "./MemberSortTableHead";
import { Link } from "../../components/atoms/Link";

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
    minWidth: 250
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
  member_td: {
    width: 130
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

MemberSortTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

export const MemberSortTable = ({ workspaceMembers }) => {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("red");
  const [selected, setSelected] = useState([]);
  const [page] = useState(0);
  const rowDatas = workspaceMembers.map(workspaceMember => {
    return {
      id: workspaceMember.id,
      name: workspaceMember.user.name,
      role: workspaceMember.role,
      red: workspaceMember.hurryTaskCount,
      yellow: workspaceMember.middleTaskCount,
      green: workspaceMember.affordTaskCount,
      gray: workspaceMember.notApproveTaskCount
    };
  });
  const [rowsPerPage] = useState(workspaceMembers.length);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rowDatas.map(n => n.user.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const isSelected = name => selected.indexOf(name) !== -1;

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
          <MemberSortTableHead
            classes={classes}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rowDatas.length}
          />
          <TableBody>
            {stableSort(rowDatas, getSorting(order, orderBy)).map(
              (row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={event => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                  >
                    <TableCell align="center" className={classes.member_td}>
                      <Link
                        href={`/workspace_members/${row.id}`}
                        message={row.name}
                      />
                    </TableCell>
                    <TableCell align="right">{row.roles}</TableCell>
                    <TableCell align="right">
                      <span className={classes.red}>{row.red}</span>
                    </TableCell>
                    <TableCell align="right">
                      <span className={classes.yellow}>{row.yellow}</span>
                    </TableCell>
                    <TableCell align="right">
                      <span className={classes.green}>{row.green}</span>
                    </TableCell>
                    <TableCell align="right">
                      <span className={classes.gray}>{row.gray}</span>
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
