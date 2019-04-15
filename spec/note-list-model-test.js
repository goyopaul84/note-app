function testReturnsNotesAsArray() {
  var noteList = new NoteList();

  assert.isTrue(Array.isArray(noteList.getNotes()));
}

function testAddNewNoteToNoteList() {
  var noteList = new NoteList();

  noteList.addNote("Greg is awesome")
  noteList.addNote("Amy is better")

  assert.isTrue(noteList.list.length === 2)
  assert.isTrue(noteList.list[0].text === "Greg is awesome")
}

testReturnsNotesAsArray();
testAddNewNoteToNoteList();
