import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {

})

router.post('/', (req, res, next) => {
    console.log(req.body)
})

router.put('/', (req, res, next) => {
    console.log()
})

export default router;