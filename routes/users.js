var express = require('express');
var router = express.Router();
var api = require('../api/api.users');

/* GET users listing. */
router.get('/', api.getUsers);
router.get('/view/:id', api.getUser);
router.post('/add', api.saveUser);
router.put('/edit/:id', api.editUser);
router.delete('/delete/:id', api.deleteUser);

module.exports = router;
