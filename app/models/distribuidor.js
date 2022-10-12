//Se hace petición a la base de datos
const { Distribuidor } = require('../orm/tables');

//Constructor con una clase
class DistribuidorModel{
    constructor(distribuidor){
        if(distribuidor){
            this.nombre = distribuidor.nombre;
            this.telefono = distribuidor.telefono;
            this.email = distribuidor.email;
            this.municipio = distribuidor.municipio;
            this.estado = distribuidor.estado;
            this.cp = distribuidor.cp;
            this.fechaEnt = distribuidor.fechaEnt;
        }
    }

    //Insertar en la base de datos
    async create(distribuidor,resultado){
        Distribuidor.findOrCreate({
            where: {nombre: distribuidor.nombre},
            defaults: distribuidor }).then(([distribuidor, created])=>{
                if(created){
                    resultado(null,distribuidor); 
                }else{
                    resultado({message: 'El distribuidor ya existe'}, null); 
                }
        }).catch((error) =>{
            resultado({message: error}, null);
        })
    }
}

module.exports = DistribuidorModel