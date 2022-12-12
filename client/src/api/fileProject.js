//funciones para conectar con los endpoints de fileProject
import {basePath,apiVersion}from './config';


export function  getImageApi(name){

    const url = `${basePath}/${apiVersion}/get-image/${name}`;

    const params ={
        method: 'GET',
        headers: {
            "Content-type":"application/json"  
        }
        
    };

        return fetch(url,params)
        .then(response => {
                return response.blob()
            }).then(result => {
                    return result
                    }).catch(error =>{
                        return error.message
                    })
}

export function  getFileApi(name){

    const url = `${basePath}/${apiVersion}/get-file/${name}`;

    const params ={
        method: 'GET',
        headers: {
            "Content-type":"application/json"  
        }
        
    };

        return fetch(url,params)
        .then(response => {
                return response.blob()
            }).then(result => {
                    return result
                    }).catch(error =>{
                        return error.message
                    })
}
