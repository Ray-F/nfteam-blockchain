import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import getAddress from '../../utils/getAddress';
import { createToken, TransferToken } from '../../utils/CENNZnetHooks';

const useStyles = makeStyles((theme) => ({}));

const onClickApprove = (request) => {
  const myAddress = getAddress();

  const { ipfsUrl, fromAddress } = request;

  createToken(ipfsUrl, myAddress);

  const TokenId = [122, 0, 0];

  TransferToken(myAddress, fromAddress, TokenId);

  fetch('/api/request', {
    method: 'PUT',
    body: {
      ipfsUrl,
      fromAddress,
      toAddress: 'MY_ADDRESS',
      isApproved: true,
    },
  });
};

const onClickDecline = (request) => {
  const { ipfsUrl, fromAddress } = request;

  fetch('/api/request', {
    method: 'PUT',
    body: {
      ipfsUrl,
      fromAddress,
      toAddress: 'MY_ADDRESS',
      isApproved: false,
    },
  });
};

const ApprovesPage = () => {
  const [requests, setRequests] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch('/api/request', {
      method: 'GET',
      body: { toAdress: 'MY_ADDRESS' },
    }).then(async (res) => {
      const data = await res.json();

      setRequests(data);
    });
  }, []);

  return <div></div>;
};

export default ApprovesPage;
