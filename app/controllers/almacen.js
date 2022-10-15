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
        existencias: req.body.existencias
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
