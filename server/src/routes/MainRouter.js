import { Router } from 'express';
import request from './RequestRoute';
import address from './AddressRoute';
import gallery from './GalleryRoute';

import defaultController from '../controllers/DefaultController';

import cennznet from '../models/cennz/CennzService';
import mongoRepo from '../models/mongodb/MongoRepository';

const router = Router();

router.use('/api/request', request);
router.use('/api/address', address);
router.use('/api/gallery', gallery);

router.get('/hello', defaultController.helloWorld);


/**
 * Test example of how to use the CennzNet api client.
 */
router.get('/test', async(req, res, next) => {
  const number = await mongoRepo.getAllRequests();
  res.json(number);
});

/*
 * To use another controller, use:
 * import controllerName from '../controllers/<ControllerName>';
 * router.get|put|post|delete|use('/<path-name>', <controllerName>.<controllerMethod)
 */

router.use('/api', (req, res) => {
  res.send(`
    <h2>Express API</h2>
    <p>
      You have reached the express API.
      Email rf.raymondfeng@gmail.com for any questions on usage.
    </p>
  `);
});


export default router;
