const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');
const AddressController = require('../controller/AddressController');

router.post('/newuser', UserController.create);
router.put('/user/update/:id', UserController.update);
router.get('/user/filter/all/', UserController.all);
router.get('/user/show/:nome', UserController.show);
router.delete('/user/delete/:id', UserController.delete);


router.post('/newaddress', AddressController.create);
router.put('/address/update/:id', AddressController.update);
router.get('/address/filter/all/', AddressController.all);
router.get('/address/show/:idUser', AddressController.show);
router.delete('/address/delete/:id', AddressController.delete);

module.exports = router;
