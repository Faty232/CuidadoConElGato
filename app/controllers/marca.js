const MarcaModel = require('../models/marca');

exports.create = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {nombre} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre){ //! si no le estas pasando un nombre
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const marca = new MarcaModel({
        nombre: req.body.nombre
    })

    marca.create(marca,(error, data) => {
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se creo la marca'
          })
          else
            res.send({ 
                message: "Se guardo correctamente",
                data 
            })
    })
}
exports.getAll = (req, res) => {
    const marca = new MarcaModel()
    marca.getAll((error, datas) =>{
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

    const {nombre} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre){
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const marca = new MarcaModel({ // Objeto con los nuevos datos
        nombre: req.body.nombre
    })

    marca.update(req.params.id,marca,(error, data) => { //req todo lo que se envia por  postman
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se modifico la marca'
          })
          else
            res.send({ 
                message: "Se modifico correctamente",
                data // datos empleado
            })
    })
}

exports.delete = (req, res) => { //req todo lo que se envia por  postman
    const marca = new MarcaModel() //Objeto
    marca.delete(req.params.id,(error,data) => {
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send({
                //Si data tiene algo eliminalo de lo contrario el usuario ya no existe
                message: data.id ?"Se elimino correctamente la marca: " +data.id : "La categoria no existe en la base de datos"
            })
    })
}


