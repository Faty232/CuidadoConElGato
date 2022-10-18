const PedidoClieModel = require('../models/pedidoClie');

exports.create = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {fechEnt, estatus , envio, cantidad,  EmpleadoId, DistribuidorId, ClienteId, DireEntId, ProductoId} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!fechEnt ||  estatus === undefined || !envio || !cantidad || !EmpleadoId || !DistribuidorId || !ClienteId || !DireEntId || !ProductoId){ //! si no le estas pasando un dato
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const pedidoClie = new PedidoClieModel({
        fechEnt: req.body.fechEnt,
        estatus: req.body.estatus,
        envio: req.body.envio,
        cantidad: req.body.cantidad,
        EmpleadoId: req.body.EmpleadoId,
        DistribuidorId: req.body.DistribuidorId,
        ClienteId: req.body.ClienteId,
        DireEntId: req.body.DireEntId,
        ProductoId: req.body.ProductoId
    })

    pedidoClie.create(pedidoClie,(error, data) => {
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se creo el pedido cliente'
          })
          else
            res.send({ 
                message: "Se guardo correctamente",
                data 
            })
    })
}

exports.getAll = (req, res) => {
    const pedidoClie = new PedidoClieModel()
    pedidoClie.getAll((error, datas) =>{
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send(datas)
    })
}

exports.getById = (req, res) =>{
    const pedidoClie = new PedidoClieModel() //instancia
    pedidoClie.getById(req.params.id,(error, datas) =>{
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

    const {fechEnt, estatus , envio, cantidad,  EmpleadoId, DistribuidorId, ClienteId, DireEntId, ProductoId} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!fechEnt ||  estatus === undefined || !envio || !cantidad || !EmpleadoId || !DistribuidorId || !ClienteId || !DireEntId || !ProductoId){
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const pedidoClie = new PedidoClieModel({ // Objeto con los nuevos datos
        fechEnt: req.body.fechEnt,
        estatus: req.body.estatus,
        envio: req.body.envio,
        cantidad: req.body.cantidad,
        EmpleadoId: req.body.EmpleadoId,
        DistribuidorId: req.body.DistribuidorId,
        ClienteId: req.body.ClienteId,
        DireEntId: req.body.DireEntId,
        ProductoId: req.body.ProductoId
    })

    pedidoClie.update(req.params.id,pedidoClie,(error, data) => { //req todo lo que se envia por  postman
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se modifico el pedido cliente'
          })
          else
            res.send({ 
                message: "Se modifico correctamente",
                data // datos pedido cliente
            })
    })
}

exports.delete = (req, res) => { //req todo lo que se envia por  postman
    const pedidoClie = new PedidoClieModel() //Objeto
    pedidoClie.delete(req.params.id,(error,data) => {
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send({
                //Si data tiene algo eliminalo de lo contrario el usuario ya no existe
                message: "Se elimino correctamente el pedido cliente "
            })
    })
}

