var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end(`<h1> Deployed Version is v5.0. ${process.env.NODE_ENV
  }  --- ${JSON.stringify(process.argv)}</h1>`);
}
console.log('V5')
console.log('8080')
console.log(JSON.stringify(process.argv))
var www = http.createServer(handleRequest);
www.listen(8080);