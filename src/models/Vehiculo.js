const { Schema, model } = require("mongoose");

const vehiculoSchema = new Schema({

    _id: Number,
    matricula: String,
    tipo: String,
    marca: String,
    nombre: String,
    color: String,


    ventas: [{
        type: Schema.Types.ObjectId,
        ref: 'Venta'
    }]
});





module.exports = model("Vehiculo", vehiculoSchema);
