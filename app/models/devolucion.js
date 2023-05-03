//Se hace petición a la base de datos
const { Devolucion } = require('../orm/tables');

//Constructor con una clase
class DevolucionModel{
    constructor(devolucion){
        if(devolucion){
            this.estatus = devolucion.estatus;
            this.motivo = devolucion.motivo;
            this.cantidad = devolucion.cantidad;
            this.total = devolucion.total;
            this.PedidoClieId = devolucion.PedidoClieId;
        }
    }

    //Insertar en la base de datos
    async create(devolucion, resultado){
        Devolucion.create(devolucion).then((devolucion)=>{
            resultado(null,devolucion); 
        }).catch((error) =>{
            resultado({message: error}, null);
        })
    }

    getAll(resultado){
        Devolucion.findAll().then((devolucion) =>{
            resultado(null, devolucion)
        }).catch((error) => {
            resultado({message: error}, null);
        })   
    }
    getById(idDev,resultado){
        Devolucion.findOne({where: {id: idDev}}).then((devolucion) =>{
            if(devolucion){
            resultado(null, devolucion)
            }else
            resultado  ({message: "No hay ninguna devolución con ese id: " +idDev}, null)
        }).catch((error) => {
            resultado({message: error}, null);
        }) 
    }


    update(idDev, devolucion, resultado){
        Devolucion.update(devolucion,{ // Update table
            where:{
                id: idDev
            }
        }).then((idDev) =>{
            resultado(null,{id: idDev[0], ...devolucion}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }

    delete(idDev, resultado){
        Devolucion.destroy({ // Delete table
            where:{
                id: idDev
            }
        }).then((idDev) =>{
            resultado(null,{id: idDev[0]}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }
}

module.exports = DevolucionModel