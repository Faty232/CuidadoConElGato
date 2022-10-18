//Se hace petición a la base de datos
const { PedidoClie } = require('../orm/tables');

//Constructor con una clase
class PedidoClieModel{
    constructor(pedidoClie){
        if(pedidoClie){
            this.fechEnt = pedidoClie.fechEnt;
            this.estatus = pedidoClie.estatus;
            this.envio = pedidoClie.envio;
            this.cantidad = pedidoClie.cantidad;
            this.EmpleadoId = pedidoClie.EmpleadoId;
            this.DistribuidorId = pedidoClie.DistribuidorId;
            this.ClienteId = pedidoClie.ClienteId;
            this.DireEntId = pedidoClie.DireEntId;
            this.ProductoId = pedidoClie.ProductoId;
        }
    }

    //Insertar en la base de datos
    async create(pedidoClie, resultado){
        PedidoClie.create(pedidoClie).then((pedidoClie)=>{
            resultado(null,pedidoClie); 
        }).catch((error) =>{
            resultado({message: error}, null);
        })
    }

    getAll(resultado){
        PedidoClie.findAll().then((pedidoClie) =>{
            resultado(null, pedidoClie)
        }).catch((error) => {
            resultado({message: error}, null);
        })   
    }

    getById(idClie,resultado){
        PedidoClie.findOne({where: {id: idClie}}).then((pedidoClie) =>{
            if(pedidoClie){
            resultado(null, pedidoClie)
            }else
            resultado  ({message: "No hay ningún pedido cliente con ese id: " +idClie}, null)
        }).catch((error) => {
            resultado({message: error}, null);
        }) 
    }

    update(idPed, pedidoClie, resultado){
        PedidoClie.update(pedidoClie,{ // Update table
            where:{
                id: idPed
            }
        }).then((idPed) =>{
            resultado(null,{id: idPed[0], ...pedidoClie}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }

    delete(idPed, resultado){
        PedidoClie.destroy({ // Delete table
            where:{
                id: idPed
            }
        }).then((idPed) =>{
            resultado(null,{id: idPed[0]}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }
}


module.exports = PedidoClieModel