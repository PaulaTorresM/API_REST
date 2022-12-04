const Venta= require('../models/Venta');
const User= require('../models/User');
const Vehiculo= require('../models/Vehiculo');

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
     
      const newVenta = new Venta(req.body,req.file)
      console.log(req.file);
      await newVenta.save();
      console.log(newVenta);
      res.json({ msj: "la venta se registro exitosamente", id: newVenta._id })
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  
  }

  exports.edit = async(req, res) => {
    try {
      const id = req.params.id;
      const newVenta = new Venta(req.body,req.file)
      console.log(req.file);
      const cambioVenta = await Venta.findByIdAndUpdate(id, newVenta);
      res.json({ msj: " la venta se actualizó exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }