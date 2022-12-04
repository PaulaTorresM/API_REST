const {Router}=require("express");
const rutasVehiculos=Router();
const autorizedHuesped=require("../auth/auth.huesped");
const veh=require("../controllers/Vehiculos.controller")







rutasVehiculos.get('/', veh.obtener);

rutasVehiculos.get('/:id', veh.obtenerid);

rutasVehiculos.post('/', veh.add,);
  
rutasVehiculos.put('/:id', veh.edit);


module.exports=rutasVehiculos;