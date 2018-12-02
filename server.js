const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
//var server = require('./app');

fs = require('fs');


fs.readFile('./graph/d3.html', function (err, html) {
    if (err) {
        throw err;
    }
    const server = http.createServer((req, res) => {

      res.setHeader('Content-Type', 'text/html');
      res.write(html);
      res.end();
    });
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
});
