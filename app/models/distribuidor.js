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
            where: {email: distribuidor.email},
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

    getAll(resultado){
        Distribuidor.findAll().then((distribuidor) =>{
            resultado(null, distribuidor)
        }).catch((error) => {
            resultado({message: error}, null);
        })   
    }

    getById(idDis,resultado){
        Distribuidor.findOne({where: {id: idDis}}).then((distribuidor) =>{
            if(distribuidor){
            resultado(null, distribuidor)
            }else
            resultado  ({message: "No hay ningún distribuidor con ese id: " +idDis}, null)
        }).catch((error) => {
            resultado({message: error}, null);
        }) 
    }

    update(idDis, distribuidor, resultado){
        Distribuidor.update(distribuidor,{ // Update table
            where:{
                id: idDis
            }
        }).then((idDis) =>{
            resultado(null,{id: idDis[0], ...distribuidor}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }

    delete(idDis, resultado){
        Distribuidor.destroy({ // Delete table
            where:{
                id: idDis
            }
        }).then((idDis) =>{
            resultado(null,{id: idDis[0]}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }
}

module.exports = DistribuidorModel