const DistribuidorModel = require('../models/distribuidor');

exports.create = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {nombre, telefono, email, municipio, estado, fechaEnt} = req.body //req.body es el que contiene los datos
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
        estado: req.body.cp,
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