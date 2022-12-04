
const {Router}=require("express");
const rutasVehiculos=Router();
const autorizedHuesped=require("../auth/auth.huesped");
const ctrHab=require("../controllers/Vehiculos.controller")
const multer=require("multer");
const fecha=Date.now();





rutasVehiculos.get('/', ctrHab.obtener);

rutasVehiculos.get('/:id', ctrHab.obtenerid);

rutasVehiculos.post('/',ctrHab.add,);
  
rutasVehiculos.put('/:id', ctrHab.edit);


module.exports=rutasVehiculos;