exports.getNotes = (req, res, next) => {
    res.render('index.ejs', {
        notes: notes
    })
};

exports.getAddNote = (req, res) => {
    res.render('add-note.ejs');
};

exports.postNote = (req, res) => {
    console.log(req.body.title);
    notes.push(req.body.title);
    console.log(notes);
    res.redirect('/');
}