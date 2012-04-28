var http, server;

server = exports;

http = require('http');

server.server = http.createServer(function(req, res) {
  return router.dispatch(req, res, function(err) {
    if (err) {
      res.writeHead(404);
      return res.end();
    }
  });
});
