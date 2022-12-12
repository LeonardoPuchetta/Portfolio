const fs = require('fs');
const path = require('path');

const FileProject = require('./../models/fileProject');

//funcion para retornar imagenes al recibir por params el nombre de la misma 
function getImage (request,response){

    const {name} = request.params;
    
    const filePath = "./../uploads/images/" + name ; 

    //generamos una ruta absoluta 
    const pathImage = path.join(__dirname,filePath);


    //comprobamos si la imagen existe y en caso que podamos leeerla la retornamos 
    if(fs.existsSync(pathImage)){
        fs.readFile(pathImage,(err,data)=>{
            if(err){
                console.log(err)
            } else {
                response.sendFile(path.resolve(pathImage))
            }
        })
    } else {
        response.status(404).send({message:"Imagen no encontrada"});
    }

}

//funcion para retornar imagenes al recibir por params el nombre de la misma 
function getFile (request,response){

    const {name} = request.params;
    
    const filePath = "./../uploads/files/" + name ; 

    //generamos una ruta absoluta 
    const pathFile = path.join(__dirname,filePath);


    //comprobamos si el archivo existe y en caso que podamos leeerlo lo retornamos 
    if(fs.existsSync(pathFile)){
        fs.readFile(pathFile,(err,data)=>{
            if(err){
                console.log(err)
            } else {
                response.sendFile(path.resolve(pathFile))
            }
        })
    } else {
        response.status(404).send({message:"Archivo no encontrado"});
    }

}


module.exports = {
    getImage,
    getFile
}