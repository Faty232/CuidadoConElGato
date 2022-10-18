const DistribuidorModel = require('../models/distribuidor');

exports.create = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {nombre, telefono, email, municipio, estado, cp, fechaEnt} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre || !telefono || !email || !municipio || !estado || !cp || !fechaEnt){ //! si no le estas pasando un nombre
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const distribuidor = new DistribuidorModel({
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        email: req.body.email,
        municipio: req.body.municipio,
        estado: req.body.estado,
        cp: req.body.cp,
        fechaEnt: req.body.fechaEnt
    })

    distribuidor.create(distribuidor,(error, data) => {
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se creo el distribuidor'
          })
          else
            res.send({ 
                message: "Se guardo correctamente",
                data 
            })
    })
}

    exports.getAll = (req, res) => {
        const distribuidor = new DistribuidorModel()
        distribuidor.getAll((error, datas) =>{
            if(error)
             res.status(500).send({
                message: error.message || 'Algo ocurrio mientras se obtenian los datos'
             })
             else
                res.send(datas)
        })
    }

    exports.getById = (req, res) =>{
        const distribuidor = new DistribuidorModel() //instancia
        distribuidor.getById(req.params.id,(error, datas) =>{
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
    
        const {nombre, telefono, email, municipio, estado, cp, fechaEnt} = req.body //req.body es el que contiene los datos
        //undefined, null, false, 0
        if(!nombre || !telefono || !email || !municipio || !estado || !cp ||!fechaEnt){
            res.status(400).send({
                message: "Los datos estan incompletos"
            })
        }
    
        const distribuidor = new DistribuidorModel({ // Objeto con los nuevos datos
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            email: req.body.email,
            municipio: req.body.municipio,
            estado: req.body.estado,
            cp: req.body.cp,
            fechaEnt: req.body.fechaEnt
        })
    
        distribuidor.update(req.params.id,distribuidor,(error, data) => { //req todo lo que se envia por  postman
            if(error)
              res.status(500).send({
                message: error.message || 'Algo ocurrio mientras se modifico el distribuidor'
              })
              else
                res.send({ 
                    message: "Se modifico correctamente",
                    data // datos distribuidor
                })
        })
    }
    
    exports.delete = (req, res) => { //req todo lo que se envia por  postman
        const distribuidor = new DistribuidorModel() //Objeto
        distribuidor.delete(req.params.id,(error,data) => {
            if(error)
             res.status(500).send({
                message: error.message || 'Algo ocurrio mientras se obtenian los datos'
             })
             else
                res.send({
                    //Si data tiene algo eliminalo de lo contrario el usuario ya no existe
                    message: "Se elimino correctamente el distribuidor"
                })
        })
    }
     