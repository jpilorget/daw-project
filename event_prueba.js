// Importamos el módulo de eventos
var eventos = require('events');

var eventEmitter = new eventos.EventEmitter();

//Handler de la conexión
var conexionHandler = function contectado() {
    console.log('Conexion exitosa');

    eventEmitter.emit('Datos recibidos');
}

// Bindeamos el evento conexión con el handler
eventEmitter.on('Conexion', conexionHandler);

//Bindeamos el evento con una función anónima
eventEmitter.on('Datos recibidos', function(){
    console.log('Llegaron los datos');
    //Acá los cambiaría para el front y los devuelvo
});

eventEmitter.emit('Conexion');