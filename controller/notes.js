let notes = [];

exports.getNotes = (req, res, next) => {
    res.render('index.ejs', {
        notes: notes,
        message: req.query.message
    })
};

exports.getAddNote = (req, res) => {
    res.render('add-note.ejs');
};

exports.postNote = (req, res) => {
    notes.push(req.body.title);
    res.redirect('/');
}

exports.deleteNote = (req, res) => {
    const title = req.query.title;
    notes = notes.filter(note => note !== title);
    res.redirect('/?message=Note Deleted');
}