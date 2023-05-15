const express = require('express');
const router = express.Router();
const assetsController = require('../../controllers/assetsController');

router.route('/')
    .get(assetsController.getAllAssets)
    .post(assetsController.createNewAsset)



module.exports = router;