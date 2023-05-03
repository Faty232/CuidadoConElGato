const ProveedorModel = require('../models/proveedor');

exports.create = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {nombre, telefono, tipo, municipio, email} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre || !telefono || !tipo || !municipio || !email){ //! si no le estas pasando un nombre
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const proveedor = new ProveedorModel({
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        tipo: req.body.tipo,
        municipio: req.body.municipio,
        email: req.body.email
    })

    proveedor.create(proveedor,(error, data) => {
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se creo el proveedor'
          })
          else
            res.send({ 
                message: "Se guardo correctamente",
                data 
            })
    })
}
exports.getAll = (req, res) => {
    const proveedor = new ProveedorModel()
    proveedor.getAll((error, datas) =>{
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send(datas)
    })
}

exports.getById = (req, res) =>{
    const proveedor = new ProveedorModel() //instancia
    proveedor.getById(req.params.id,(error, datas) =>{
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

    const {nombre, telefono, tipo, municipio, email} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre || !telefono || !tipo || !municipio || !email){
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const proveedor = new ProveedorModel({ // Objeto con los nuevos datos
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        tipo: req.body.tipo,
        municipio: req.body.municipio,
        email: req.body.email
    })

    proveedor.update(req.params.id,proveedor,(error, data) => { //req todo lo que se envia por  postman
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se modifico el proveedor'
          })
          else
            res.send({ 
                message: "Se modifico correctamente",
                data // datos proveedor
            })
    })
}

exports.delete = (req, res) => { //req todo lo que se envia por  postman
    const proveedor = new ProveedorModel() //Objeto
    proveedor.delete(req.params.id,(error,data) => {
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send({
                //Si data tiene algo eliminalo de lo contrario el usuario ya no existe
                message: "Se elimino correctamente el proveedor: " 
            })
    })
}