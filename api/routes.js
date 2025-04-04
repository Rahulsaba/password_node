
const express = require('express');
const { createUser ,getUsers} = require('../controlers.js');
const router = express.Router()


router.post('/users', createUser);
router.get('/users', getUsers);
// router.get('/:userid', getUser);
// router.delete('/:userid', deleteUser);
// router.patch('/:userid', updateUser);

module.exports = router;