(function() {
  //mapped to German umlaut characters
  var keyCodes = {
    A: "\u00c4",
    O: "\u00d6",
    U: "\u00dc",
    S: "\u00df",
    a: "\u00e4",
    o: "\u00f6",
    u: "\u00fc",
    s: "\u00df"
  };

  // handle key down event
  function handleKeyDown(e) {
    e = e || window.event;

    var input;

    if (e.key !== undefined) {
      input = e.key;
    } else {
      input = String.fromCharCode(e.keyCode);

      if (!e.shiftKey) {
        input = input.toLocaleLowerCase();
      }
    }

    if (e.altKey && keyCodes[input]) {
      e.preventDefault();
      insertTo(document.activeElement, keyCodes[input]);
    }
  }

  // insert character at the cursor
  function insertTo(elem, key) {
    elem.focus();
    document.execCommand('insertText', false, key);
  }

  // register keydown event
  document.addEventListener("keydown", handleKeyDown);
})();
