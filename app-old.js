

const http = require('http');

http.createServer((req, res) => {
//request = lo que se esta solicitando por parte del cliente o usuario
//response = la respuesta que vamos a dar cuando se haga la request


    // res.writeHead(200, {'Content-Type': 'text/plain'});



    res.write('Hola mundo')
    res.end()

})

.listen( 8080 );

console.log('Escuchando el puerto', 8080);