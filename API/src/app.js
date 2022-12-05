const express = require('express');
const cors = require("cors");
const morgan = require('morgan');
const conexionBD = require('./db.conexion');
const rutasUser=require('./routes/users.routes');
const rutasVehiculos = require('./routes/vehiculos.routes');
const rutasVentas = require('./routes/ventas.routes');
const app = express()
const port=process.env.PORT || 3007;
//Conexión a la BD
conexionBD();

//Configuraciones
app.set("name","api-venta");
app.set("port",process.env.PORT || 3007);


app.use(express.static('public'));
//Midlewares
app.use(express.json());
app.use(morgan("dev"));

//Llamado de rutas
app.use(express.static('public'));

app.use('/public', express.static(__dirname + '/public'));
app.use("/")
app.use("/vehiculos",rutasVehiculos);
app.use("/users",rutasUser);
app.use("/ventas",rutasVentas);

module.exports=app;