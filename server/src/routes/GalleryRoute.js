import { Router } from 'express';
import cennznet from '../models/cennz/CennzService';
import Approval from '../models/Approval';

const router = Router();

// TODD potentially need to be changed or stored in .env
const collectionId = 66;

/**
 * Test example of how to use the CennzNet api client.
 */
router.get('/test', async (req, res, next) => {
  const apiClient = await cennznet.createClient();
  res.json((await cennznet.getClientDetails(apiClient)).chain);
});

router.get('/', async (req, res, next) => {
  const apiClient = await cennznet.createClient();

  const tokenInfos = await apiClient.derive.nft.tokenInfoForCollection(
    collectionId
  );

  let dict = {};
  tokenInfos?.forEach(({ tokenId, attributes, owner }) => {
    const { collectionId, seriesId, serialNumber } = tokenId;
    const id = `${collectionId.toString()}_${seriesId.toString()}_${serialNumber.toString()}`;
    const [Url, Text, Timestamp] = attributes;

    const ipfsURL = Url.asUrl.toString();
    const creator = Text.asText.toString();
    const timestamp = Timestamp.asTimestamp.toString();

    const entry = dict[ipfsURL + '_' + owner];
    if (entry) {
      if (!entry[0].includes(creator)) entry[0].push(creator);
    } else {
      dict[ipfsURL + '_' + owner] = [[creator], id, timestamp];
    }
  });

  let approvals = [];
  for (let key in dict) {
    const keyInfo = key.split('_');
    approvals.push(
      new Approval(
        dict[key][1],
        dict[key][2],
        keyInfo[0],
        keyInfo[1],
        dict[key][0]
      )
    );
  }

  res.json(approvals);
});

export default router;
