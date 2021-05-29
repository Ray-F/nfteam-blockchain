import { Router } from 'express';
import request from './RequestRoute';
import address from './AddressRoute';
import gallery from './GalleryRoute';
import test from './TestRoute';

const router = Router();

// Route for managing VerificationRequests
router.use('/api/request', request);

// Route for managing Addresses
router.use('/api/address', address);

// Route for managing the available NFT gallery of publicly verified information
router.use('/api/gallery', gallery);

// Route for resetting data and testing API endpoints
router.use('/test', test);

/*
 * To use another controller, use:
 * import controllerName from '../controllers/<ControllerName>';
 * router.get|put|post|delete|use('/<path-name>', <controllerName>.<controllerMethod)
 */

export default router;
