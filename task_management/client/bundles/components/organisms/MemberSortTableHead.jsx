import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";


function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }else if (b[orderBy] > a[orderBy]) {
    return 1;
  }else{
    return 0;
  }
}

const headCells = [{
    id: "name",
    numeric: false,
    disablePadding: true,
    label: ""
  },
  {
    id: "role",
    numeric: false,
    disablePadding: false,
    label: ""
  },
  {
    id: "red",
    numeric: true,
    disablePadding: false,
    label: ""
  },
  {
    id: "yellow",
    numeric: true,
    disablePadding: false,
    label: ""
  },
  {
    id: "green",
    numeric: true,
    disablePadding: false,
    label: ""
  }
];



export const MemberSortTableHead = props => {
  const {
    classes,
    order,
    orderBy,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {
          headCells.map(
            headCell => (
              <TableCell
                key = {headCell.id}
                align = {headCell.numeric ? "right" : "left"}
                padding = {headCell.disablePadding ? "none" : "default"}
                sortDirection = {orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active = {orderBy === headCell.id}
                  direction = {order}
                  onClick = {createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {
                    orderBy === headCell.id ? (
                      <span
                        className = {classes.visuallyHidden}
                      >
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </span>
                    ) : null
                  }
                </TableSortLabel>
              </TableCell>
            )
          )
        }
      </TableRow>
    </TableHead>
  );
};
