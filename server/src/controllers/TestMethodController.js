import mongoRepo from '../models/mongodb/MongoRepository';
import { Keyring } from '@polkadot/keyring';
import fs from 'fs';
import cennznet from '../models/cennz/CennzService';

/**
 * Generates the private key (identity) for a user through their `private_key.json` key and password.
 */
const generateIdentity = () => {
  const keyring = new Keyring({ type: 'sr25519' });
  const json = JSON.parse(fs.readFileSync("ENTER FILE PATH HERE").toString());
  const identity = keyring.addFromJson(json);
  identity.decodePkcs8("ENTER YOUR PASSWORD HERE");

  return identity;
}

/**
 * Deletes all requests in the DB.
 */
const deleteAllRequestsOnDb = async (req, res, next) => {
  const requestIds = (await mongoRepo.getAllRequests()).map((request) => request.id);
  for (const id of requestIds) {
    await mongoRepo.deleteRequest(id);
  }

  res.status(200).send();
}

const createCollection = async (req, res, next) => {
  const api = await cennznet.createClient();
  const identity = generateIdentity();

  const collectionName = "nfteam-test1";
  const mdBaseUri = "ipfs";

  let respCode = null;
  await api.tx.nft.createCollection(collectionName, mdBaseUri, null)
    .signAndSend(identity, {}, (res) => {
      respCode = res.status.asFinalized;
    });
  res.json(respCode);
}

const transferToken = async (req, res, next) => {
  const api = await cennznet.createClient();
  const identity = generateIdentity();

  // Will's account
  const addressToSend = "5GWVMKzwKVhdUXAv9dgTUZ4XUxXXTixgFZHnvKHRfwK93Hdn";

  let respCode = null;
  await api.tx.nft.transfer([66, 0, 0], addressToSend)
    .signAndSend(identity, {}, (res) => {
      respCode = res.status.asFinalized;
    });

  res.json(respCode);
}

const createToken = async (req, res, next) => {
  const api = await cennznet.createClient();
  const identity = generateIdentity();

  const collectionId = 66;
  const quantity = 1;
  const creator = identity.address;

  /*
   * These attributes are saved inside the NFT that is minted, and cannot be changed.
   */
  const attributes = [
    // The URL of the video / document we are wanting to preserve
    { 'Url': 'https://www.spprax.co.nz' },

    // The creator of the NFT
    { 'Text': creator },

    // The time at which the NFT is created (i.e. now)
    { 'Timestamp': new Date().valueOf() },
  ]

  let respCode = null;
  await api.tx.nft.mintSeries(collectionId, quantity, creator, attributes, null, null)
    .signAndSend(identity, {}, (res) => {
      respCode = res.status.asFinalized;
    });
  res.json(respCode);
}

const getTokens = async (req, res, next) => {
  const api = await cennznet.createClient();

  const collectionId = 66;

  const result = await api.derive.nft.tokenInfoForCollection(collectionId);
  res.json(result);
}

export default {
  deleteAllRequestsOnDb,
  createCollection,
  transferToken,
  createToken,
  getTokens
}
