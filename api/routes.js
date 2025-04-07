
const router = require('express').Router()
const { createMedia ,createUser,getMedia ,getUsers} = require('../controlers.js');



router.post('/createmedia', createMedia);
router.get('/createmedia', getMedia);
router.post('/createuser', createUser);
router.get('/users', getUsers);
// router.get('/:userid', getUser);
// router.delete('/:userid', deleteUser);
// router.patch('/:userid', updateUser);

module.exports = router;