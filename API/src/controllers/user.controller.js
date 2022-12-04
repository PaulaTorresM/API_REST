const User = require("../models/User");
const jwt=require("jsonwebtoken");

exports.obtener = async (req, res) => {
  try {
    const users = await User.find().populate({
      path: "ventas",
      select:{user:0}, // populate reservas
      populate: {
         path: "Vehiculos",
         select:{
          "_id": 1,
          "matricula": 1,
          "tipo": 1,
          "marca": 1, 
          "nombre": 1,
          "color": 1
      
         } // in reservas, populate habitaciones
      }
    }     
    );
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error)
  }
}
exports.obtenerid = async (req, res) => {
    try {
      const id = req.params.id;
      const users = await User.findById(id).populate({
        path: "ventas",
        select:{user:0}, // populate reservas
        populate: {
           path: "Vehiculos",
           select:{
            "_id": 1,
            "matricula": 1,
            "tipo": 1,
            "marca": 1, 
            "nombre": 1,
            "color": 1
        
           } // in reservas, populate habitaciones
        }
      }     
      );
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error)
    }
  }
  exports.add = async (req, res) => {
    try {
     
      const newUser = new User(req.body)
      await newUser.save();
      console.log(newUser);
      res.json({ msj: "Usuario registrado exitosamente", newUser })
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  
  }

exports.edit = async(req, res) => {
    try {
      const id = req.params.id;
      const newUser = new User(req.body)
 

      const cambioUsuario = await User.findByIdAndUpdate(id, newUser);
      res.json({ msj: "Usuario actualizado exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }

   