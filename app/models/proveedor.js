//Se hace petición a la base de datos
const { Proveedor } = require('../orm/tables');

//Constructor con una clase
class ProveedorModel{
    constructor(proveedor){
        if(proveedor){
            this.nombre = proveedor.nombre;
            this.telefono = proveedor.telefono;
            this.tipo = proveedor.tipo;
            this.municipio = proveedor.municipio;
            this.email = proveedor.email;
        }
    }

    //Insertar en la base de datos
    async create(proveedor,resultado){
        Proveedor.findOrCreate({
            where: {nombre: proveedor.nombre},
            defaults: proveedor }).then(([proveedor, created])=>{
                if(created){
                    resultado(null,proveedor); 
                }else{
                    resultado({message: 'El proveedor ya existe'}, null); 
                }
        }).catch((error) =>{
            resultado({message: error}, null);
        })
    }

    getById(idPro,resultado){
        Proveedor.findOne({where: {id: idPro}}).then((proveedor) =>{
            if(proveedor){
            resultado(null, proveedor)
            }else
            resultado  ({message: "No hay ningún proveedor con ese id: " +idPro}, null)
        }).catch((error) => {
            resultado({message: error}, null);
        }) 
    }

    getAll(resultado){
        Proveedor.findAll().then((proveedor) =>{
            resultado(null, proveedor)
        }).catch((error) => {
            resultado({message: error}, null);
        })   
    }

    update(idPro, proveedor, resultado){
        Proveedor.update(proveedor,{ // Update table
            where:{
                id: idPro
            }
        }).then((idPro) =>{
            resultado(null,{id: idPro[0], ...proveedor}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }

    delete(idPro, resultado){
        Proveedor.destroy({ // Delete table
            where:{
                id: idPro
            }
        }).then((idPro) =>{
            resultado(null,{id: idPro[0]}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }
}

module.exports = ProveedorModel