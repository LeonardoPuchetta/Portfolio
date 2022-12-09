const express = require('express');
const ProjectController = require('./../controllers/project');

//variable para generar rutas 
const api = express.Router();

api.get('/get-projects',ProjectController.getProjects);



module.exports = api;