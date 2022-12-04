const Usuario = require("../models/User");
const Vehiculo = require("../models/Vehiculo");
const Venta = require("../models/Venta");
const jwt=require("jsonwebtoken");

exports.obtener = async (req, res) => {
  try {
    const ventas = await Venta.find().populate('user',{
      "tipodoc": 1,
      "_id": 1,
      "numdoc": 1,
      "nombre": 1, 
      "apellido": 1
    }).populate('Vehiculos',{
      "_id": 1,
      "matricula": 1,
      "tipo": 1,
      "marca": 1, 
      "nombre": 1,
      "color": 1
    });
    res.status(200).json(ventas);
  } catch (error) {
    res.status(500).json(error)
  }

}

exports.obtenerid = async (req, res) => {
    try {
      const id = req.params.id;
      const ventas = await Venta.findById(id).populate('user',{
        "tipodoc": 1,
        "_id": 1,
        "numdoc": 1,
        "nombre": 1, 
        "apellido": 1

        }).populate('Vehiculos',{
          "_id": 1,
          "matricula": 1,
          "tipo": 1,
          "marca": 1, 
          "nombre": 1,
          "color": 1
        });
      res.status(200).json(ventas);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  exports.add = async (req, res) => {  
    
   try {
      const { precio, user,vehiculo} = req.body;
      //console.log(req.body);  
      const iduser = req.params.iduser;
      const idVehiculo = req.params.idVehiculo;

      const users=await Usuario.findById(iduser);
      const vehiculos =await Vehiculo.findById(idVehiculo)
 
      try{
        const NuevaVenta= new Venta ({precio, user:users._id, vehiculo:vehiculos._id})
        console.log(NuevaVenta);
        const saveVenta = await NuevaVenta.save();
        vehiculos.ventas=vehiculos.ventas.concat(saveVenta._id);
        await vehiculos.save();
        users.ventas=users.ventas.concat(saveVenta._id);
        await users.save();
        console.log(saveVenta)
        res.status(200).json(saveVenta);
      }catch (error) {
        res.status(500).json({msj:"Error al registrar"+error})
      }
      
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  }

exports.edit = async(req, res) => {
    try {
      const id = req.params.id;
      const newUser = new User(req.body)
     

      const cambioUsuario = await User.findByIdAndUpdate(
         newUser);
      res.json({ msj: "Usuario actualizado exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }

