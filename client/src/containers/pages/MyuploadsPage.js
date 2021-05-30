import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Upload from '../../components/myuploads/upload';
import { Button } from '@material-ui/core';

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
        <Button style={{ border: '1px solid black' }}>Upload video</Button>
      </Grid>

      {requests.map(({ id, date, ipfsUrl }) => (
        <Upload id={id} date={date} video={ipfsUrl} />
      ))}
    </Grid>
  );
}

export default MyuploadsPage;
