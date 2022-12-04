const {Router}=require("express");
const rutasVentas=Router();
const autorizedHuesped=require("../auth/auth.huesped");
const ctrRes=require("../controllers/ventas.controllers");

rutasVentas.get('/', ctrRes.obtener);

rutasVentas.get('/:id', ctrRes.obtenerid);

rutasVentas.post('/', ctrRes.add);
  
rutasVentas.put('/:id', ctrRes.edit);


module.exports=rutasVentas;