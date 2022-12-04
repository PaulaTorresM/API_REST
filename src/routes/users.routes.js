
const {Router}=require("express");
const rutasUser=Router();
const ctrUser=require("../controllers/user.controller");
//const autorizedHuesped=require("../auth/auth.huesped");
const multer=require("multer");
const fecha=Date.now();




rutasUser.get('/', ctrUser.obtener);

rutasUser.get('/:id', ctrUser.obtenerid);

rutasUser.post('/',ctrUser.add);

  
rutasUser.put('/:id',ctrUser.edit);


module.exports=rutasUser;