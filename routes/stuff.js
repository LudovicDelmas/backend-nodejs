const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff')

router.post('/api/stuff', stuffCtrl.createThing);

router.get('/:id', stuffCtrl.getOneThing);

router.put('/:id', stuffCtrl.modifyThing);

router.delete('/:id', stuffCtrl.deleteThing);

router.get('/', stuffCtrl.getAllThings);

module.exports = router;