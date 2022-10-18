const ClienteModel = require('../models/cliente');

exports.create = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {nombre, tipo, direccion, colonia, cp, estado, email, telefono} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre || !tipo || !direccion || !colonia || !cp || !estado || !email || !telefono){ //! si no le estas pasando un nombre
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const cliente = new ClienteModel({
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        direccion: req.body.direccion,
        colonia: req.body.colonia,
        cp: req.body.cp,
        estado: req.body.estado,
        email: req.body.email,
        telefono: req.body.telefono
    })

    cliente.create(cliente,(error, data) => {
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se creo el cliente'
          })
          else
            res.send({ 
                message: "Se guardo correctamente",
                data 
            })
    })
}

exports.getAll = (req, res) => {
    const cliente = new ClienteModel()
    cliente.getAll((error, datas) =>{
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send(datas)
    })
}

exports.getById = (req, res) =>{
    const cliente = new ClienteModel() //instancia
    cliente.getById(req.params.id,(error, datas) =>{
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

    const {nombre, tipo, direccion, colonia, cp, estado, email, telefono} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre || !tipo || !direccion || !colonia || !cp || !estado || !email || !telefono){
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const cliente = new ClienteModel({ // Objeto con los nuevos datos
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        direccion: req.body.direccion,
        colonia: req.body.colonia,
        cp: req.body.cp,
        estado: req.body.estado,
        email: req.body.email,
        telefono: req.body.telefono
    })

    cliente.update(req.params.id,cliente,(error, data) => { //req todo lo que se envia por  postman
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se modifico el cliente'
          })
          else
            res.send({ 
                message: "Se modifico correctamente",
                data // datos empleado
            })
    })
}

exports.delete = (req, res) => { //req todo lo que se envia por  postman
    const cliente = new ClienteModel() //Objeto
    cliente.delete(req.params.id,(error,data) => {
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send({
                //Si data tiene algo eliminalo de lo contrario el usuario ya no existe
                message: "Se elimino correctamente el cliente " 
            })
    })
}