//Se hace petición a la base de datos
const { Almacen } = require('../orm/tables');

//Constructor con una clase
class AlmacenModel{
    constructor(almacen){
        if(almacen){
            this.existencias = almacen.existencias;
            this.ProductoId = almacen.ProductoId;
        }
    }

     //Insertar en la base de datos
     async create(almacen, resultado){
        Almacen.create(almacen).then((almacen)=>{
            resultado(null,almacen); 
        }).catch((error) =>{
            resultado({message: error}, null);
        })
    }

    getAll(resultado){
        Almacen.findAll().then((almacen) =>{
            resultado(null, almacen)
        }).catch((error) => {
            resultado({message: error}, null);
        })   
    }

    update(idAlm, almacen, resultado){
        Almacen.update(almacen,{ // Update table
            where:{
                id: idAlm
            }
        }).then((idAlm) =>{
            resultado(null,{id: idAlm[0], ...almacen}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }

    delete(idAlm, resultado){
        Almacen.destroy({ // Delete table
            where:{
                id: idAlm
            }
        }).then((idAlm) =>{
            resultado(null,{id: idAlm[0]}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }
}

module.exports = AlmacenModel
