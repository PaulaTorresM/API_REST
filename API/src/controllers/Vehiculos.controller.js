const mongoose = require("mongoose");
const Vehiculo = require("../models/Vehiculo");


exports.obtener = async (req, res) => {
  try {
    const Vehiculos = await Vehiculo.find().populate('ventas', {  
      "_id": 1,    
      "precio": 1
    });;
    res.status(200).json(Vehiculos);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.obtenerid = async (req, res) => {
  try {
    const id = req.params.id;
    const Vehiculos = await Vehiculo.findById(id).populate('ventas', {      
      "_id": 1, 
      "precio": 1
    });;
    res.status(200).json(Vehiculos);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.add = async (req, res) => {
  try {
   
    const newVehiculo = new Vehiculo(req.body)    
    await newVehiculo.save();
    console.log(newVehiculo);
    res.json({ msj: "El vehiculo se registró exitosamente", id: newVehiculo._id })
  } catch (error) {
    res.status(500).json({ msj: "Error al registrar " + error })
  }

}

exports.edit = async (req, res) => {
  try {
    const id = req.params.id;
    const newVehiculo = new Vehiculo(req.body, req.file)
    console.log(req.file);
   
    //console.log(`El id que se va a cambiar estado es ${id}`);
    const editarVehiculo = await Vehiculo.findByIdAndUpdate(id, newVehiculo);
    res.json({ msj: "El Vehiculo se actualizo exitosamente" })
  } catch (error) {
    res.status(500).json(error);
  }
}


