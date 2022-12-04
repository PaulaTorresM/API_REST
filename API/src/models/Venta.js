const { Schema, model } = require("mongoose");

const ventaSchema = new Schema({

  _id: Number,
  precio: String,




  user: [{
    type: Schema.Types.Number,
    ref: 'User'
  }],
  Vehiculos: [{
    type: Schema.Types.Number,
    ref: 'Vehiculo'
  }]

});
module.exports = model("Venta", ventaSchema);
