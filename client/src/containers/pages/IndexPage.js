import React, { useEffect } from 'react';
import getAddress from '../../utils/getAddress';
import { addressState } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    flexGrow: 1,
  },
}));

export default function IndexPage() {
  const classes = useStyles();
  const [address, setAddress] = useRecoilState(addressState);

  // Initialize to set the Address
  useEffect(() => {
    async function fetchData() {
      const data = await getAddress();
      setAddress(data);
      console.log(address);
    }
    fetchData();
  }, []);
  console.log(address);

  return (
    <div className={classes.root}>
      <h1>Index Page</h1>
    </div>
  );
}
