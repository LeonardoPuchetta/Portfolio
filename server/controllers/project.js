const fs = require('fs');
const path = require('path');

const Project = require('./../models/project');

//para obtener informacion de proyectos desde la base 
function getProjects(request,response){

    Project.find().then((projects)=>{
        if(!projects){
            response.status(404).send({message:"No se han encontrado proyectos"})
        } else {
            response.status(200).send({projects})
        }
    })
}

// exportacion de las funcionalidades 

module.exports = {
    getProjects,
}

