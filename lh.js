const http = require('http'); 
const fs = require('fs'); 
 
const host = 'localhost'; 
const port = 8000; 
 
const server = http.createServer( 
    function(req, res) { 
        fs.readFile('text.txt', 'UTF-8', (err, data) => {
            if (err) {
              console.error(err)
              res.end('Error')
              return
            }
            res.end(data)
          })
        })
 
server.listen(port, host, function() { 
    console.log('Server is running at http://' + host + ':' + port); 
});
