import { Keyring } from '@polkadot/keyring';
import fs from 'fs';
import cennznet from './cennz/CennzService';

/**
 * Generates the private key (identity) for a user through their `private_key.json` key and password.
 */
const generateIdentity = () => {
  const keyring = new Keyring({ type: 'sr25519' });
  const json = JSON.parse(fs.readFileSync('./NFTeam.json').toString());
  const identity = keyring.addFromJson(json);
  identity.decodePkcs8('a1y1MLZhqXGK');

  return identity;
};

const transferToken = async (from, to, tokenIdAsList) => {
  const api = await cennznet.createClient();

  await api.tx.nft.transfer(tokenIdAsList, to).signAndSend(from, {}, (res) => {
    return res.status.asFinalized;
  });
};

const createToken = async (ipfsUrl, verifiedBy) => {
  const api = await cennznet.createClient();
  const NFTeam = generateIdentity();

  const collectionId = 122;
  const quantity = 1;

  /*
   * These attributes are saved inside the NFT that is minted, and cannot be changed.
   */
  const attributes = [
    // The URL of the video / document we are wanting to preserve
    { Url: ipfsUrl },

    // The creator of the NFT
    { Text: verifiedBy },

    // The time at which the NFT is created (i.e. now)
    { Timestamp: new Date().valueOf() },
  ];

  await api.tx.nft
    .mintSeries(collectionId, quantity, verifiedBy, attributes, null, null)
    .signAndSend(NFTeam, {}, (res) => {
      return res.status.asFinalized;
    });
};

export default {
  transferToken,
  createToken,
};
