var log;

log = module.exports;

require('colors');

log.info = function(output) {
  return console.log(output.cyan);
};

log.warn = function(output) {
  return console.log(output.magenta);
};

log.error = function(output) {
  return console.log(output.red);
};
