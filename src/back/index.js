/*=============================================================================
 * Authors: Agustin Bassi, Brian Ducca, Santiago Germino 
 * Date: Jul 2020
 * Licence: GPLV3+
 * Project: DAW - CEIoT - Project Structure
 * Brief: Main backend file
=============================================================================*/

//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

var express = require('express');
var app     = express();
var mysql   = require('./mysql-connector');

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));
//var datos = require('/datos.json')
var conexionMysql = require('./mysql-connector');


//=======[ Main module code ]==================================================

app.get('/dispositivos', function(req, res, next) {
    conexionMysql.query('Select * from Devices',function(err,respuesta){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send(respuesta)
    })
    // response = "{ 'key1':'value1' }"
    //res.send(JSON.stringify(response)).status(200);
    //res.status(400).send(JSON.stringify(response)).status(200);
    //res.json(datos)
});

//dispositivos/i(con i = numero de dispositivo)
app.get('/dispositivos/:id', function(req, res, next) {
    //Funciones de java script => map reduce filter 
    //let datosFiltrados = datos.filter(itemDeLaLista=>{
      //  return itemDeLaLista.id ==req.params.id;
      //otra manera for (let in datos)
      conexionMysql.query('Select * from Devices where id=?',[req.params.id],function(err,respuesta){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send(respuesta)
    })
 });
 
 //Ejercicio 6
 //Espero recibir algo del estilo (body) {id:1, state:1}
 //devuelvo el dato modificado
 app.post('/dispositivos', function(req, res){
     console.log(req.body)
    conexionMysql.query('Insert into Devices(name, state, type) VALUES(?, ?, ?)',[req.body.name,req.body.state, req.body.type],function(err,respuesta){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send("Se agregó dispotivio de manera correcta: " + JSON.stringify(respuesta).status(200))
    })
 });


 app.put('/dispositivos/:id?', function(req, res){
    console.log(req.body)
    conexionMysql.query('Update Devices set state=?, name=? where id=?' ,[req.body.state,req.body.name, req.params.id],function(err,respuesta){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send("Se actualizó correctamente: " + JSON.stringify(respuesta).status(200))
    })
 }); 

 app.delete('/dispositivos', function(req, res){
    console.log(req.body)
    conexionMysql.query('Delete from Devices where name=?' ,[req.body.name],function(err,respuesta){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send("Se eliminó el dispositivo de manera correcta: " + JSON.stringify(respuesta).status(200))
    })
 }); 


app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================