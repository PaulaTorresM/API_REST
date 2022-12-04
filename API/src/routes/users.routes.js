
const {Router}=require("express");
const rutasUser=Router();
const User=require("../controllers/user.controller");
//const autorizedHuesped=require("../auth/auth.huesped");
const multer=require("multer");





rutasUser.get('/', User.obtener);

rutasUser.get('/:id', User.obtenerid);

rutasUser.post('/', User.add);

  
rutasUser.put('/:id', User.edit);


module.exports=rutasUser;