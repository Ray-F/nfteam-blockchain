import { Router } from 'express';

import testController from '../controllers/TestMethodController';

const router = new Router();

router.get('/delete-all-requests', testController.deleteAllRequestsOnDb);

router.get('/create-collection', testController.createCollection);

router.get('/transfer-token', testController.transferToken);

router.get('/create-token', testController.createToken);

router.get('/get-tokens', testController.getTokens);

export default router;
