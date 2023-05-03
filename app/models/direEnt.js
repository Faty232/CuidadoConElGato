//Se hace petición a la base de datos
const { DireEnt, Cliente } = require('../orm/tables');

//Constructor con una clase
class DireEntModel{
    constructor(direEnt){
        if(direEnt){
            this.direccion = direEnt.direccion;
            this.cp = direEnt.cp;
            this.estado = direEnt.estado;
            this.ClienteId = direEnt.ClienteId;
        }
    }

    //Insertar en la base de datos
    async create(direEnt, resultado){
        DireEnt.create(direEnt).then((direEnt)=>{
            resultado(null,direEnt); 
        }).catch((error) =>{
            resultado({message: error}, null);
        })
    }

    getAll(resultado){
        DireEnt.findAll({include: [Cliente]}).then((direEnt) =>{
            resultado(null, direEnt)
        }).catch((error) => {
            resultado({message: error}, null);
        })   
    }
    getById(idDire,resultado){
        DireEnt.findOne({where: {id: idDire}}).then((direEnt) =>{
            if(direEnt){
            resultado(null, direEnt)
            }else
            resultado  ({message: "No hay ninguna dirección con ese id: " +idDire}, null)
        }).catch((error) => {
            resultado({message: error}, null);
        }) 
    }

    update(idEnt, direEnt, resultado){
        DireEnt.update(direEnt,{ // Update table
            where:{
                id: idEnt
            }
        }).then((idEnt) =>{
            resultado(null,{id: idEnt[0], ...direEnt}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }

    delete(idEnt, resultado){
        DireEnt.destroy({ // Delete table
            where:{
                id: idEnt
            }
        }).then((idEnt) =>{
            resultado(null,{id: idEnt[0]}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }
}


module.exports = DireEntModel