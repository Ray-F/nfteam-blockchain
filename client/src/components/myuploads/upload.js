import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
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

function Upload({ id, timestamp, video }) {
  const classes = useStyles();
  return (
    <div style={{ margin: '30px 0' }}>
      <Paper>
        <Grid item container spacing={2}>
          <div style={{ width: '100px', padding: '20px 30px' }}>
            <video style={{ width: '100%' }} src={video} />
          </div>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
              <Typography gutterBottom variant="subtitle1">
                {id}
              </Typography>

              <Typography variant="body2" color="textSecondary">
                {timestamp}
              </Typography>
            </Grid>
          </Grid>
          <Button style={{ border: '1px solid purple', margin: '20px 0' }}>
            {' '}
            Play Video
          </Button>
          <Grid item>
            <Typography
              style={{ margin: 'auto 50px auto 0' }}
              variant="subtitle1"
            >
              Verified
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Upload;
