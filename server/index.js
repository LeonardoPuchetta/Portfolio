const mongoose = require('mongoose') ;
// app es un objeto express 
const app = require('./app');


//traemos la version de la api , la direccion del servidor local y el puerto 
const {API_VERSION , IP_SERVER , PORT_DB,PORT_SERVER} = require("./config");

// << CONEXION DE LA BASE DE DATOS CON mongoose >>
mongoose.connect(`mongodb+srv://Leonardo:ratm2000@portfolio.w1bvo2t.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser: true , useUnifiedTopology: true },(err,res)=>{
if (err) {
    throw err
}else {

console.log("La conexion a la base de datos es correcta ");

  app.listen(PORT_SERVER , () => {
      console.log("###########################");
      console.log("###########API-REST########");
      console.log("###########CONEXION-CORRECTA !########");
      console.log("###########################");
      console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
   } )
}

});