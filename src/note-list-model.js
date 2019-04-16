(function(exports) {

  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.getNotes = function() {
    return this.list;
  }

  NoteList.prototype.addNote = function(text) {
    this.list.push(new Note(text));
  }
  exports.NoteList = NoteList;
})(this);
