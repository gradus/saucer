log = module.exports

require 'colors'

log.info = (output) ->
  console.log output.cyan

log.warn = (output) ->
  console.log output.magenta

log.error = (output) ->
  console.log output.red

