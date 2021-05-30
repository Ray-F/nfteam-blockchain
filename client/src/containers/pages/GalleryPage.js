import React, { useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    border: "1px solid red",
  },
  videoThmb: {
    width: '100%',
  },

  gridItem: {
    border: "1px solid black"
  }
}));

const GalleryPage = () => {
  const classes = useStyles();
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    fetch('/api/gallery', { 'method': 'GET' }).then(async (res) => {
      const data = await res.json();
      console.log(data);
      setTokens(data);
    });

  }, []);

  return (
    <div>
      <h1>Latest Videos</h1>

      <Grid container className={classes.videoContainer}>
        {tokens.map((token) => (
          <Grid item xs={12} md={4} className={classes.gridItem}>
            <div>
              <video className={classes.videoThmb} src={token.ipfsUrl} />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GalleryPage;
