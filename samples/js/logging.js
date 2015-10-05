
window.updateConsoleLogging = function (outputDiv) {
  if (typeof console  !== 'undefined') {
    if (typeof console.olog !== 'undefined') {
      console.log = console.olog;
      delete console.olog;
    }
    if (typeof console.log !== 'undefined') {
      console.olog = console.log;
    } else {
      console.olog = function () {};
    }
  }

  console.log = function (message) {
    console.olog(message);
    $(outputDiv).append(`<p>${message}</p>`);
  };
  console.error = console.debug = console.info = console.log;
};

