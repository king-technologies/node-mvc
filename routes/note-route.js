const express = require('express');
const { getNotes, getAddNote, postNote, deleteNote } = require('../controller/notes');
const router = express.Router();

router.get('/', getNotes);

router.get('/add-note', getAddNote)

router.post('/add-note', postNote)

router.get('/delete-note', deleteNote)

module.exports = router;