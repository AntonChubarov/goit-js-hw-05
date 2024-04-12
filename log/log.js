'use strict';

(function () {
  var oldLog = console.log;
  var outputDiv = document.getElementById('console-output');

  console.log = function (message) {
    if (typeof message === 'object') {
      message = JSON.stringify(message, null, 2);
    }
    outputDiv.innerHTML += '<p><pre>' + message + '</pre></p>';
    oldLog.apply(console, arguments);
  };
})();
