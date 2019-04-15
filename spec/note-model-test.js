function testNoteHasText() {
  var note = new Note("Hello you!");

  assert.isTrue(note.text === "Hello you!")
};

testNoteHasText();
