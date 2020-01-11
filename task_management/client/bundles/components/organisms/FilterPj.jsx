import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    maxWidth: 400,
    display: 'flex',
  },
  select: {
    minWidth: 260,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
    height: 20,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const department_names = [
  'CD',
  'RD',
  'Corporate',
  'Marketing',
  'Branding',
  'Area Management',
  'Strategy & Operations'
];

const project_names = [
  'PM',
  'Member',
  '担当外'
];

function getStyles(name, departmentNames, theme) {
  return {
    fontWeight:
      departmentNames.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const FilterPj = props =>{
  const classes = useStyles();
  const theme = useTheme();
  const [departmentNames, setDepartmentNames] = useState([]);
  const [projectNames, setProjectNames] = useState([]);

  const handleDepartmentChange = event => {
    setDepartmentNames(event.target.value);
  };
  const handleProjectChange = event => {
    setProjectNames(event.target.value);
  };

  return (
    <>
      <FormControl
        className={classes.formControl}
      >
        <InputLabel id="department_select">部署</InputLabel>
        <Select
          multiple
          value={departmentNames}
          onChange={handleDepartmentChange}
          input={<Input id="select_depertment" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip
                  key={value}
                  label={value}
                  className={classes.chip}
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {department_names.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, departmentNames, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="department_select">PJ種別</InputLabel>
        <Select
          multiple
          value={projectNames}
          onChange={handleProjectChange}
          input={<Input id="select_depertment" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip
                  key={value}
                  label={value}
                  className={classes.chip}
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {project_names.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, projectNames, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
