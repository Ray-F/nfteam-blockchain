import { Router } from "express";
import cennznet from "../models/cennz/CennzService";

const router = Router();

/**
 * Test example of how to use the CennzNet api client.
 */
router.get("/test", async (req, res, next) => {
  const apiClient = await cennznet.createClient();
  res.json((await cennznet.getClientDetails(apiClient)).chain);
});

router.get("/", async (req, res, next) => {
  const apiClient = await cennznet.createClient();
  const chain = await cennznet.getClientDetails(apiClient).chain;

  const collectionId = req.body.collectionId;

  const tokenInfos = await apiClient.derive.nft.tokenInfoForCollection(0);

  let dict = {};
  let approvals = [];
  tokenInfos?.map(({ tokenId, attributes, owner }) => {
    const { collectionId, seriesId, serialNumber } = tokenId;
    const id = `${collectionId.toString()}_${seriesId.toString()}_${serialNumber.toString()}`;
    const { ipfsURL, creator, timestamp } = attributes;

    // id, ipfsURL, ownerAdress, VerifiedBy = [], timestamp
    const creators = dict[ipfsURL + owner];
    if (creators) {
      creators.push(creator);
    } else {
      dict[ipfsURL + owner] = [creator];
    }
  });
  // for (key in dict) {
  //   approvals.push(new Approval());
  // }
});

export default router;
