//Se hace petición a la base de datos
const { Almacen } = require('../orm/tables');

//Constructor con una clase
class AlmacenModel{
    constructor(almacen){
        if(almacen){
            this.existencias = almacen.existencias;
        }
    }

     //Insertar en la base de datos
     async create(resultado){
        Almacen.create().then((almacen)=>{
            resultado(null,almacen); 
        }).catch((error) =>{
            resultado({message: error}, null);
        })
    }
}

module.exports = AlmacenModel
