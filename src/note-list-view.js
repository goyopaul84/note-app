(function(exports) {

  function NoteListView(notelist = NoteList) {
    this.view = notelist
  }

  NoteListView.prototype.returnHTML = function() {
    htmlString = [];
    this.view.list.forEach(function(note){
      htmlString.push("<ul><li><div>" + note.text + "</div></li></ul>");
    })

    return htmlString.join('');
  }

  exports.NoteListView = NoteListView;
})(this)
