//Se hace petición a la base de datos
const { Marca } = require('../orm/tables');

//Constructor con una clase
class MarcaModel{
    constructor(marca){
        if(marca){
            this.nombre = marca.nombre;
        }
    }

    //Insertar en la base de datos
    async create(marca,resultado){
        Marca.findOrCreate({
            where: {nombre: marca.nombre},
            defaults: marca }).then(([marca, created])=>{
                if(created){
                    resultado(null,marca); 
                }else{
                    resultado({message: 'La marca ya existe'}, null); 
                }
        }).catch((error) =>{
            resultado({message: error}, null);
        })
    }
    getAll(resultado){
        Marca.findAll().then((marca) =>{
            resultado(null, marca)
        }).catch((error) => {
            resultado({message: error}, null);
        })   
    }

    update(idMar, marca, resultado){
        Marca.update(marca,{ // Update table
            where:{
                id: idMar
            }
        }).then((idMar) =>{
            resultado(null,{id: idMar[0], ...marca}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }

    delete(idMar, resultado){
        Marca.destroy({ // Delete table
            where:{
                id: idMar
            }
        }).then((idMar) =>{
            resultado(null,{id: idMar[0]}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }
}

module.exports = MarcaModel