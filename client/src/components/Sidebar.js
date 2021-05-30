import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Tooltip,
  MenuItem,
  MenuList,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import { SidebarData } from './SidebarData';

const useStyles = makeStyles((theme) => ({
  sidebarSize: { minWidth: '250px', maxWidth: '250px', height: '100%' },
  sidebarRoot: {
    minHeight: '500px',
    backgroundColor: theme.palette.primary.light,
    position: 'fixed',
  },
  logoBox: {
    height: '10%',
  },
  menuRoot: {
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  menuItemRoot: {
    width: '100%',
    height: '80px',
    color: '#808291',
    '&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover': {
      color: 'black',
      background:
        'linear-gradient(270deg, rgba(51, 71, 116, 0) 0%, rgba(40, 49, 80, 0.05) 70%);',
      borderLeft: `5px solid ${theme.palette.primary.dark}`,
      borderRight: `5px solid ${theme.palette.primary.light}`,
    },
  },
  menuItemSelected: {},
}));

function Sidebar() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <div className={classes.sidebarSize} />
      <div className={clsx(classes.sidebarRoot, classes.sidebarSize)}>
        <MenuList className={classes.menuRoot}>
          <Box display="flex" flexDirection="column">
            {SidebarData.map((val) => {
              return (
                <Tooltip title={val.title} enterDelay={200} key={val.link}>
                  <MenuItem
                    key={val.link}
                    component={Link}
                    to={val.link}
                    classes={{
                      root: classes.menuItemRoot,
                      selected: classes.menuItemSelected,
                    }}
                    selected={val.link === location.pathname}
                  >
                    {val.icon}
                    <Typography style={{ paddingLeft: '10px' }}>
                      {val.title}
                    </Typography>
                  </MenuItem>
                </Tooltip>
              );
            })}
          </Box>
        </MenuList>
      </div>
    </>
  );
}

export default Sidebar;
