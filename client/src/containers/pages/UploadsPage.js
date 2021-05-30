import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

const UploadsPage = () => {
  const [requests, setRequests] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch('/api/request', { method: 'GET' }).then(async (res) => {
      const data = await res.json();
      console.log(data);
      setRequests(data);
    });
  }, []);

  return <div></div>;
};

export default UploadsPage;
