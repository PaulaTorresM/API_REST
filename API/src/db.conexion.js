const mongoose = require('mongoose');
const conexionBD=async()=>{
    
    try{
        const DB=await mongoose.connect('mongodb+srv://paulatorres:paulandrea@cluster0.wme9r9c.mongodb.net/Venta_Vehiculos?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Conexión satisfactoria",DB.connection.name);
    }
    catch(  error){
        console.log(error);
    }
}

module.exports=conexionBD;
