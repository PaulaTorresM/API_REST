const { Schema, model } = require("mongoose");

const userSchema = new Schema({


    _id: Number,
    tipodoc: String,
    numdoc: String,
    nombre: String,
    apellido: String,


    ventas: [{
        type: Schema.Types.ObjectId,
        ref: 'Venta'
    }]
});





module.exports = model("User", userSchema);
