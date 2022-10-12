//Se hace petición a la base de datos
const { TipoPrenda } = require('../orm/tables');

//Constructor con una clase
class TipoPrendaModel{
    constructor(tipoPrenda){
        if(tipoPrenda){
            this.nombre = tipoPrenda.nombre;
            this.genero = tipoPrenda.genero;
            this.temporada = tipoPrenda.temporada
        }
    }

    //Insertar en la base de datos
    async create(tipoPrenda,resultado){
        TipoPrenda.findOrCreate({
            where: {nombre: tipoPrenda.nombre},
            defaults: tipoPrenda }).then(([tipoPrenda, created])=>{
                if(created){
                    resultado(null,tipoPrenda); 
                }else{
                    resultado({message: 'El tipo de prenda ya existe'}, null); 
                }
        }).catch((error) =>{
            resultado({message: error}, null);
        })
    }

    getAll(resultado){
        TipoPrenda.findAll().then((tipoPrenda) =>{
            resultado(null, tipoPrenda)
        }).catch((error) => {
            resultado({message: error}, null);
        })   
    }

    update(idPre, tipoPrenda, resultado){
        TipoPrenda.update(tipoPrenda,{ // Update table
            where:{
                id: idPre
            }
        }).then((idPre) =>{
            resultado(null,{id: idPre[0], ...tipoPrenda}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }

    delete(idPre, resultado){
        TipoPrenda.destroy({ // Delete table
            where:{
                id: idPre
            }
        }).then((idPre) =>{
            resultado(null,{id: idPre[0]}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }
}


module.exports = TipoPrendaModel
