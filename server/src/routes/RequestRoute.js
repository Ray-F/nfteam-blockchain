import { Router } from 'express';
import VerificationRequest from '../models/VerificationRequest';
import mongoRepo from '../models/mongodb/MongoRepository';

const router = Router();

/**
 * Route for getting all `VerificationRequest`s in the DB.
 */
router.get('/', async (req, res, next) => {
  const verificationRequests = await mongoRepo.getAllRequests();
  res.json(verificationRequests);
});

/**
 * Route for creating a new `VerificationRequest` in the DB.
 */
router.post('/', async (req, res, next) => {
  const verificationRequest = new VerificationRequest(null,
                                                      null,
                                                      req.body.ipfsUrl,
                                                      req.body.fromAddress,
                                                      req.body.toAddresses,
                                                      null);
  await mongoRepo.saveRequest(verificationRequest);
  res.status(200).send();
});

/**
 * Route for updating the approval state of a `VerificationRequest`.
 */
router.put('/', async (req, res, next) => {
  let verificationRequest = new VerificationRequest(req.body.id,
                                                    req.body.timestamp,
                                                    req.body.ipfsUrl,
                                                    req.body.fromAddress,
                                                    req.body.toAddresses,
                                                    req.body.isApproved)
  await mongoRepo.saveRequest(verificationRequest);
  res.status(200).send();
});

export default router;
