server = exports

http = require 'http'

server.server = http.createServer((req, res) ->
  router.dispatch req, res, (err) ->
    if err
      res.writeHead 404
      res.end()
)

