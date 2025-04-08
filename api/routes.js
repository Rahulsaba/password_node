
const router = require('express').Router()
const { createMedia,
    createUser,
    getMedia,
    getUsers,
    deleteMedia } = require('../controlers.js');


router.post('/createmedia', createMedia);
router.get('/createmedia', getMedia);
router.delete('/deletemedia/:id', deleteMedia);



router.post('/createuser', createUser);
router.get('/users', getUsers);
// router.get('/:userid', getUser);
// router.patch('/:userid', updateUser);

module.exports = router;