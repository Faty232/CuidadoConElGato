const DevolucionModel = require('../models/devolucion');
const pedidoClieRouter = require('../routes/pedidoClie');

exports.create = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {estatus, motivo, cantidad, total, PedidoClieId} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(estatus === undefined || !motivo || !cantidad || !total || !PedidoClieId){ //! si no le estas pasando un nombre
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const devolucion = new DevolucionModel({
        estatus: req.body.estatus,
        motivo: req.body.motivo,
        cantidad: req.body.cantidad,
        total: req.body.total,
        PedidoClieId: req.body.PedidoClieId
    })

    devolucion.create(devolucion,(error, data) => {
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se creo la devolución'
          })
          else
            res.send({ 
                message: "Se guardo correctamente",
                data 
            })
    })
}

exports.getAll = (req, res) => {
    const devolucion = new DevolucionModel()
    devolucion.getAll((error, datas) =>{
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send(datas)
    })
}

exports.update = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {estatus, motivo, cantidad, total, PedidoClieId} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(estatus === undefined || !motivo || !cantidad || !total || !PedidoClieId){
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const devolucion = new DevolucionModel({ // Objeto con los nuevos datos
        estatus: req.body.estatus,
        motivo: req.body.motivo,
        cantidad: req.body.cantidad,
        total: req.body.total,
        PedidoClieId: req.body.PedidoClieId
    })

    devolucion.update(req.params.id,devolucion,(error, data) => { //req todo lo que se envia por  postman
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se modifico la devolución'
          })
          else
            res.send({ 
                message: "Se modifico correctamente",
                data // datos empleado
            })
    })
}

exports.delete = (req, res) => { //req todo lo que se envia por  postman
    const devolucion = new DevolucionModel() //Objeto
    devolucion.delete(req.params.id,(error,data) => {
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send({
                //Si data tiene algo eliminalo de lo contrario el usuario ya no existe
                message: "Se elimino correctamente la devolución "
            })
    })
}

