//Se hace petición a la base de datos
const { Categoria } = require('../orm/tables');

//Constructor con una clase
class CategoriaModel{
    constructor(categoria){
        if(categoria){
            this.nombre = categoria.nombre;
            this.descripcion = categoria.descripcion;
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

    getAll(resultado){
        Categoria.findAll().then((categoria) =>{
            resultado(null, categoria)
        }).catch((error) => {
            resultado({message: error}, null);
        })   
    }

    update(idCat, categoria, resultado){
        Categoria.update(categoria,{ // Update table
            where:{
                id: idCat
            }
        }).then((idCat) =>{
            resultado(null,{id: idCat[0], ...categoria}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }

    delete(idCat, resultado){
        Categoria.destroy({ // Delete table
            where:{
                id: idCat
            }
        }).then((idCat) =>{
            resultado(null,{id: idCat[0]}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }
}

module.exports = CategoriaModel