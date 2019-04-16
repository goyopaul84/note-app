function testMakeNewViewInstance () {
  var noteList = new NoteList();
  noteList.addNote('This is the first note');
  noteList.addNote('This is the second note');

  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.view.list[0].text === 'This is the first note')
}

function testReturnsStringHTML() {
  var noteList = new NoteList();
  noteList.addNote('This is the first note');
  noteList.addNote('This is the second note');
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.returnHTML() === "<li><div>This is the first note</div></li><li><div>This is the second note</div></li>")
}

function testEmptyReturnStringHTML(){
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.returnHTML() === '')
}

testMakeNewViewInstance();
testReturnsStringHTML();
testEmptyReturnStringHTML();
