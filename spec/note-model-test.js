function testNoteHasText() {
  var note = new Note("Hello you!");

  assert.isTrue(note.text === "Hello you!")
};

function testNoteHasTextGetterFunction() {
  var note = new Note("Sup, fool!?")

  assert.isTrue(note.getText() === "Sup, fool!?")
}
testNoteHasText();
testNoteHasTextGetterFunction();
