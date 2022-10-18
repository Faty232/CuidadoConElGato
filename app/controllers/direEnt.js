const DireEntModel = require('../models/direEnt');

exports.create = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {direccion, cp, estado} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!direccion || !cp || !estado){ //! si no le estas pasando un dato
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const direEnt = new DireEntModel({
        direccion: req.body.direccion,
        cp: req.body.cp,
        estado: req.body.estado,
        ClienteId: req.body.ClienteId
    })

    direEnt.create(direEnt,(error, data) => {
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se creo la dirección de entrega'
          })
          else
            res.send({ 
                message: "Se guardo correctamente",
                data 
            })
    })
}

exports.getAll = (req, res) => {
    const direEnt = new DireEntModel()
    direEnt.getAll((error, datas) =>{
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

    const {direccion, cp, estado, ClienteId} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!direccion || !cp || !estado || !ClienteId){
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const direEnt = new DireEntModel({ // Objeto con los nuevos datos
        direccion: req.body.direccion,
        cp: req.body.cp,
        estado: req.body.estado,
        ClienteId: req.body.ClienteId
    })

    direEnt.update(req.params.id,direEnt,(error, data) => { //req todo lo que se envia por  postman
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se modifico la dirección de entrega'
          })
          else
            res.send({ 
                message: "Se modifico correctamente",
                data // datos empleado
            })
    })
}

exports.delete = (req, res) => { //req todo lo que se envia por  postman
    const direEnt = new DireEntModel() //Objeto
    direEnt.delete(req.params.id,(error,data) => {
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send({
                //Si data tiene algo eliminalo de lo contrario el usuario ya no existe
                message: "Se elimino correctamente la dirección de entrega "
            })
    })
}

