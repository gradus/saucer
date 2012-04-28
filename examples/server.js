saucer = require('../bin/saucer')
pin = require('linchpin')
apprentice = require('apprentice')

pin.on('GET', function(req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('<strong>The Mothership has landed</strong>');
});


apprentice.httpServer.listen(3000);



