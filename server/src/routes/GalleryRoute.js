import { Router } from 'express';
import cennznet from '../models/cennz/CennzService';
import Approval from '../models/Approval';

const router = Router();

/**
 * Test example of how to use the CennzNet api client.
 */
router.get('/test', async (req, res, next) => {
  const apiClient = await cennznet.createClient();
  res.json((await cennznet.getClientDetails(apiClient)).chain);
});

router.get('/', async (req, res, next) => {
  const apiClient = await cennznet.createClient();

  const tokenInfos = await apiClient.derive.nft.tokenInfoForCollection(0);

  let dict = {};
  tokenInfos?.map(({ tokenId, attributes, owner }) => {
    const { collectionId, seriesId, serialNumber } = tokenId;
    const id = `${collectionId.toString()}_${seriesId.toString()}_${serialNumber.toString()}`;
    const { ipfsURL, creator, timestamp } = attributes;

    // tokenId, timestamp, ipfsURL, ownerAdress, VerifiedBy = []
    const creators = dict[ipfsURL + '_' + owner][0];
    if (creators) {
      creators.push(creator);
    } else {
      dict[ipfsURL + '_' + owner] = [[creator], id, timestamp];
    }
  });

  let approvals = [];
  for (key in dict) {
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
