var http = require('http');
var nStatic = require('node-static');
var fileServer = new nStatic.Server('./jsatests');
http.createServer(function (req, res) {
fileServer.serve(req, res);
}).listen(5000);
console.log('Node server is listening on http://localhost:5000');