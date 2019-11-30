import React from 'react';
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
    maxWidth: 600,
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

function getStyles(name, departmentName, theme) {
  return {
    fontWeight:
      departmentName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const FilterDepartment = props =>{
  const classes = useStyles();
  const theme = useTheme();
  const [departmentName, setDepartmentName] = React.useState([]);

  const handleChange = event => {
    setDepartmentName(event.target.value);
  };
  const handleDelete = () => {

  };

  const handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setdepartmentName(value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="department_select">部署</InputLabel>
        <Select
          id="demo-mutiple-chip"
          multiple
          value={departmentName}
          onChange={handleChange}
          input={<Input id="select_depertment" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip
                  key={value}
                  label={value}
                  className={classes.chip}
                  onDelete={handleDelete}
                  />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {department_names.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, departmentName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
