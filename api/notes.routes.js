const router = require('express').Router()
const { createNote, getAllNotes } = require('../controlers/notes.controlers.js');
const { protectedRoutes } = require('../middleware/protectedRoutes.js');


router.post('/createnotes', protectedRoutes, createNote)
router.get('/createnotes', protectedRoutes, getAllNotes)

module.exports = router;