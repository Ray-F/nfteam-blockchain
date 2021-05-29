import { Router } from 'express';

import defaultController from '../controllers/DefaultController';

import cennznet from '../models/cennz/CennzService';

const router = Router();

router.use('/api/request', request);
router.use('/api/adress', address);
router.use('/api/gallery', gallery);

router.get('/hello', defaultController.helloWorld);


/**
 * Test example of how to use the CennzNet api client.
 */
router.get('/test', async(req, res, next) => {
  const apiClient = await cennznet.createClient();
  res.json((await cennznet.getClientDetails(apiClient)).chain);
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
