(function(exports) {
  function NoteList(note = Note) {
    this.list = [];
    this.note = note;
  }

  NoteList.prototype.getNotes = function() {
    return this.list;
  }

  NoteList.prototype.addNote = function(text) {
    this.list.push(new this.note(text));
  }
  exports.NoteList = NoteList
})(this);
