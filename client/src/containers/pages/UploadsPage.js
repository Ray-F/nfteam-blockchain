import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import getRequest from '../../utils/getRequest';

const useStyles = makeStyles((theme) => ({

}));

const UploadsPage = () => {
  const [requests, setRequests] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      const data = await getRequest();
      console.log(data);
      setRequests(data);
    }
    fetchData();
  }, []);

  return (
    <div>

    </div>
  );
};

export default UploadsPage;
