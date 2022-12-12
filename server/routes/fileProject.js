const express = require('express');
const FileProjectController = require('./../controllers/fileProject');

//variable para generar rutas 
const api = express.Router();

api.get('/get-image/:name',FileProjectController.getImage);
api.get('/get-file/:name',FileProjectController.getFile);

module.exports = api;

