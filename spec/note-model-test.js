(function(exports) {
  function testNoteHasText() {
    var note = new Note("Hello you!");

    if (note.text !== "Hello you!") {
      throw new Error("WHERE MA TEXT FOOL?!");
    }
  };

  testNoteHasText();
})(this);
