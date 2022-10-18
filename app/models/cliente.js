//Se hace petición a la base de datos
const { Cliente } = require('../orm/tables');

//Constructor con una clase
class ClienteModel{
    constructor(cliente){
        if(cliente){
            this.nombre = cliente.nombre;
            this.tipo = cliente.tipo;
            this.direccion = cliente.direccion;
            this.colonia = cliente.colonia;
            this.cp = cliente.cp;
            this.estado = cliente.estado;
            this.email = cliente.email;
            this.telefono = cliente.telefono;
        }
    }

    //Insertar en la base de datos
    async create(cliente,resultado){
        Cliente.findOrCreate({
            where: {email: cliente.email},
            defaults: cliente }).then(([cliente, created])=>{
                if(created){
                    resultado(null,cliente); 
                }else{
                    resultado({message: 'El cliente ya existe'}, null); 
                }
        }).catch((error) =>{
            resultado({message: error}, null);
        })
    }

    getAll(resultado){
        Cliente.findAll().then((cliente) =>{
            resultado(null, cliente)
        }).catch((error) => {
            resultado({message: error}, null);
        })   
    }

    getById(idCli,resultado){
        Cliente.findOne({where: {id: idCli}}).then((cliente) =>{
            if(cliente){
            resultado(null, cliente)
            }else
            resultado  ({message: "No hay ningún usuario con ese id: " +idCli}, null)
        }).catch((error) => {
            resultado({message: error}, null);
        }) 
    }

    update(idCli, cliente, resultado){
        Cliente.update(cliente,{ // Update table
            where:{
                id: idCli
            }
        }).then((idCli) =>{
            resultado(null,{id: idCli[0], ...cliente}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }

    delete(idCli, resultado){
        Cliente.destroy({ // Delete table
            where:{
                id: idCli
            }
        }).then((idCli) =>{
            resultado(null,{id: idCli[0]}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }
}

module.exports = ClienteModel

