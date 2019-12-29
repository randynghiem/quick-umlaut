(function() {
  // register keydown event
  document.addEventListener("keydown", handleKeyDown, true);

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
    var input = getCharCode(e);

    if (e.altKey && keyCodes[input]) {
      insertTo(e, keyCodes[input]);
    }
  }

  // determine the input character
  function getCharCode(e) {
    var input;

    if (e.key !== undefined) {
      input = e.key;
    } else {
      input = String.fromCharCode(e.keyCode);

      if (!e.shiftKey) {
        input = input.toLocaleLowerCase();
      }
    }
    return input;
  }

  // insert character at the cursor
  function insertTo(e, key) {
    e.preventDefault();

    var target = e.target,
      isEditable = target.contentEditable == "true";

    if (isEditable) {
      target.focus();
      document.execCommand("insertText", false, key);
    } else {
      var start = target.selectionStart,
        end = target.selectionEnd,
        val = target.value;
      target.value =
        val.substring(0, start) + key + val.substring(end, val.length);
      target.selectionStart = start + 1;
      target.selectionEnd = end + 1;
    }
  }
})();
