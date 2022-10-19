const ProductoModel = require('../models/producto');

exports.create = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {nombre, descripcion, color, talla, precio, estatus, TipoPrendaId, CategoriumId, ProveedorId, MarcaId} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre || !descripcion || !color || !talla || !precio || estatus === undefined || !TipoPrendaId || !CategoriumId || !ProveedorId || !MarcaId){ //! si no le estas pasando un nombre
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const producto = new ProductoModel({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        color: req.body.color,
        talla: req.body.talla,
        precio: req.body.precio,
        estatus: req.body.estatus,
        TipoPrendaId: req.body.TipoPrendaId,
        CategoriumId: req.body.CategoriumId,
        ProveedorId: req.body.ProveedorId,
        MarcaId: req.body.MarcaId
    })

    producto.create(producto,(error, data) => {
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se creo el producto'
          })
          else
            res.send({ 
                message: "Se guardo correctamente",
                data 
            })
    })
}

exports.getAll = (req, res) => {
    const producto = new ProductoModel()
    producto.getAll((error, datas) =>{
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send(datas)
    })
}

exports.getById = (req, res) =>{
    const producto = new ProductoModel() //instancia
    producto.getById(req.params.id,(error, datas) =>{
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

    const {nombre, descripcion, color, talla, precio, estatus, TipoPrendaId, CategoriumId, ProveedorId, MarcaId } = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre || !descripcion || !color || !talla || !precio || estatus === undefined  || !TipoPrendaId || !CategoriumId || !ProveedorId || !MarcaId){
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const producto = new ProductoModel({ // Objeto con los nuevos datos
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        color: req.body.color,
        talla: req.body.talla,
        precio: req.body.precio,
        estatus: req.body.estatus,
        TipoPrendaId: req.body.TipoPrendaId,
        CategoriumId: req.body.CategoriumId,
        ProveedorId: req.body.ProveedorId,
        MarcaId: req.body.MarcaId
    })

    producto.update(req.params.id,producto,(error, data) => { //req todo lo que se envia por  postman
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se modifico el producto'
          })
          else
            res.send({ 
                message: "Se modifico correctamente",
                data // datos empleado
            })
    })
}

exports.delete = (req, res) => { //req todo lo que se envia por  postman
    const producto = new ProductoModel() //Objeto
    producto.delete(req.params.id,(error,data) => {
        console.log(data)
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send({
                //Si data tiene algo eliminalo de lo contrario el usuario ya no existe
                message: "Se elimino correctamente el producto: "
            })
    })
}


