const TipoPrendaModel = require('../models/tipoPrenda');

exports.create = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {nombre, genero, temporada} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre || !genero || !temporada){ //! si no le estas pasando un nombre
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const tipoPrenda = new TipoPrendaModel({
        nombre: req.body.nombre,
        genero: req.body.genero,
        temporada: req.body.temporada
    })

    tipoPrenda.create(tipoPrenda,(error, data) => {
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se creo el tipo de prenda'
          })
          else
            res.send({ 
                message: "Se guardo correctamente",
                data 
            })
    })
}

exports.getAll = (req, res) => {
    const tipoPrenda = new TipoPrendaModel()
    tipoPrenda.getAll((error, datas) =>{
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

    const {nombre, genero, temporada} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre || !genero || !temporada){
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const tipoPrenda = new TipoPrendaModel({ // Objeto con los nuevos datos
        nombre: req.body.nombre,
        genero: req.body.genero,
        temporada: req.body.temporada
    })

    tipoPrenda.update(req.params.id,tipoPrenda,(error, data) => { //req todo lo que se envia por  postman
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se modifico el tipo de prenda'
          })
          else
            res.send({ 
                message: "Se modifico correctamente",
                data // datos tipoPrenda
            })
    })
}

exports.delete = (req, res) => { //req todo lo que se envia por  postman
    const tipoPrenda = new TipoPrendaModel() //Objeto
    tipoPrenda.delete(req.params.id,(error,data) => {
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send({
                //Si data tiene algo eliminalo de lo contrario el usuario ya no existe
                message: "Se elimino correctamente el tipo de prenda: " 
            })
    })
}


