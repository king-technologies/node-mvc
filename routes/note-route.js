const express = require('express');
const { getNotes, getAddNote, postNote } = require('../controller/notes');
const router = express.Router();

router.get('/', getNotes);

router.get('/add-note', getAddNote)

router.post('/add-note', postNote)

module.exports = router;