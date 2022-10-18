const AlmacenModel = require('../models/almacen');

exports.create = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {existencias} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!existencias){ //! si no le estas pasando un nombre
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const almacen = new AlmacenModel({
        existencias: req.body.existencias,
        ProductoId: req.body.ProductoId

    })

    almacen.create(almacen,(error, data) => {
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se creo el almacen'
          })
          else
            res.send({ 
                message: "Se guardo correctamente",
                data 
            })
    })
}

exports.getAll = (req, res) => {
    const almacen = new AlmacenModel()
    almacen.getAll((error, datas) =>{
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

    const {existencias, ProductoId} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!existencias || !ProductoId){
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const almacen = new AlmacenModel({ // Objeto con los nuevos datos
        existencias: req.body.existencias,
        ProductoId: req.body.ProductoId
    })

    almacen.update(req.params.id,almacen,(error, data) => { //req todo lo que se envia por  postman
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se modifico el almacen'
          })
          else
            res.send({ 
                message: "Se modifico correctamente",
                data // datos empleado
            })
    })
}

exports.delete = (req, res) => { //req todo lo que se envia por  postman
    const almacen = new AlmacenModel() //Objeto
    almacen.delete(req.params.id,(error,data) => {
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send({
                //Si data tiene algo eliminalo de lo contrario el usuario ya no existe
                message: "Se elimino correctamente el almacen "
            })
    })
}

