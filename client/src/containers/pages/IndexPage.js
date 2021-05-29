import React, { useEffect } from 'react'
import getAddress from "../../utils/getAddress"
import { addressState } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';

export default function IndexPage() {
  const [address, setAddress] = useRecoilState(addressState);

  // Initialize to set the Address
  useEffect(() => {
    async function fetchData() {
      const data = await getAddress();
      setAddress(data);
      console.log(address);

    }
    fetchData();
  }, [])
  console.log(address);

  return (
    <React.Fragment>
      <h1>Index Page</h1>
    </React.Fragment>
  )
}
