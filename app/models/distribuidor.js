//Se hace petición a la base de datos
const { Distribuidor } = require('../orm/tables');

//Constructor con una clase
class DistribuidorModel{
    constructor(distribuidor){
        if(distribuidor){
            this.telefono = distribuidor.telefono;
            this.email = distribuidor.email;
            this.municipio = distribuidor.municipio;
            this.esatdo = distribuidor.esatdo;
        }
    }

    //Insertar en la base de datos
    async create(categoria,resultado){
        Categoria.findOrCreate({
            where: {nombre: categoria.nombre},
            defaults: categoria }).then(([categoria, created])=>{
                if(created){
                    resultado(null,categoria); 
                }else{
                    resultado({message: 'La categoria ya existe'}, null); 
                }
        }).catch((error) =>{
            resultado({message: error}, null);
        })
    }