
var serverInit = function(PORT){

    var currentEnv = process.env.NODE_ENV || 'development';
    console.log("Current Environment: " + currentEnv);

    var server = express();

    if (process.env.PORT) {
        console.log("Using port from process.env.PORT");
        var port = normalizePort(process.env.PORT);
    }

    else if (!process.env.PORT){
        console.log("No process.env.PORT found");
        console.log("Looking for a PORT");

        if (PORT) {
            console.log("Found PORT");
            console.log("Using port from PORT");
            var port = normalizePort(PORT);
        }

        else {
            console.log("No PORT found");
            console.log("Using default port");
            var port = normalizePort('3000');
        }

    }

    server.set('port', port);

    //Normalize a port into a number, string, or false.
    function normalizePort(val) {
        var port = parseInt(val, 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        }

        if (port >= 0) {
            // port number
            console.log("Server is running on Port: " + port);
            return port;
        }

        return false;
    }


    // Listen on provided port, on all network interfaces.
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);


    // Event listener for HTTP server "error" event.
    function onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        var bind = typeof port === 'string' ? 'Pipe ' + port
            : 'Port ' + port;

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    // Event listener for HTTP server "listening" event.
    function onListening() {
        var addr = server.address();
        var bind = typeof addr === 'string' ? 'pipe ' + addr
            : 'port ' + addr.port;
        debug('Listening on ' + bind);
    }

    return server

};

module.exports = serverInit;