const CategoriaModel = require('../models/categoria');

exports.create = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {nombre, descripcion} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre || !descripcion){ //! si no le estas pasando un nombre
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const categoria = new CategoriaModel({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    })

    categoria.create(categoria,(error, data) => {
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se creo la categoria'
          })
          else
            res.send({ 
                message: "Se guardo correctamente",
                data 
            })
    })
}

exports.getAll = (req, res) => {
    const categoria = new CategoriaModel()
    categoria.getAll((error, datas) =>{
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

    const {nombre, descripcion} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre || !descripcion){
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const categoria = new CategoriaModel({ // Objeto con los nuevos datos
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    })

    categoria.update(req.params.id,categoria,(error, data) => { //req todo lo que se envia por  postman
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se modifico la categoria'
          })
          else
            res.send({ 
                message: "Se modifico correctamente",
                data // datos empleado
            })
    })
}

exports.delete = (req, res) => { //req todo lo que se envia por  postman
    const categoria = new CategoriaModel() //Objeto
    categoria.delete(req.params.id,(error,data) => {
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send({
                //Si data tiene algo eliminalo de lo contrario el usuario ya no existe
                message: data.id ?"Se elimino correctamente la categoria: " +data.id : "La categoria no existe en la base de datos"
            })
    })
}

