var log;

log = exports;

require('colors');

log.info = function(output) {
  return console.log(output.cyan);
};
