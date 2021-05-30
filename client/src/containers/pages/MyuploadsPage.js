import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    padding: '30px 10%',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function MyuploadsPage() {
  const [requests, setRequests] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch('/api/request', { method: 'GET' }).then(async (res) => {
      const data = await res.json();
      console.log(data);
      setRequests(data);
    });
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      className={classes.root}
    >
      <Grid item container>
        <Typography variant="h4">Welcome Back!</Typography>
        <div style={{ flexGrow: 1 }}></div>
        <button>asdf</button>
      </Grid>

      <Paper>
        <Grid item container spacing={2}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
              <Typography gutterBottom variant="subtitle1">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ID: 1030114
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">$19.00</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default MyuploadsPage;
