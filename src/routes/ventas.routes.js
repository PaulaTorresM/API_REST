const {Router}=require("express");
const rutasVentas=Router();
const autorizedHuesped=require("../auth/auth.huesped");
const ven=require("../controllers/ventas.controllers");

rutasVentas.get('/',ven.obtener);

rutasVentas.get('/:id', ven.obtenerid);

rutasVentas.post('/', ven.add);
  
rutasVentas.put('/:id', ven.edit);


module.exports=rutasVentas;