const notes = [];

module.exports = class Note {
    constructor(title) {
        this.title = title;
    }

    add() {
        notes.push(this);
        console.log(notes);
    }

    static fetchAll() {
        return notes;
    }

}