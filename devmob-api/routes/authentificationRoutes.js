const express = require('express');
const router = express.Router();
const authentificationController = require('../controllers/authentificationController');



router.post('/inscrire', authentificationController.inscrire);

router.post('/connecter', authentificationController.connecter);

router.post('/:telephone/deconnecter', authentificationController.deconnecter);

module.exports = router;
