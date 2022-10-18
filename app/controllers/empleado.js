//Hacer algo antes de que se haga la consulta
const EmpleadoModel = require('../models/empleado');

exports.create = (req, res) => {
    console.log(req.body)
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {nombre, edad, administrador, direccion, cp, estado, email, telefono, contraseña} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre || !edad || administrador === undefined || !direccion || !cp || !estado || !email || !telefono || !contraseña){
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const empleado = new EmpleadoModel({
        nombre: req.body.nombre,
        edad: req.body.edad,
        administrador: req.body.administrador,
        direccion: req.body.direccion,
        cp: req.body.cp,
        estado: req.body.estado,
        email: req.body.email,
        telefono: req.body.telefono,
        contraseña: req.body.contraseña
    })

    empleado.create(empleado,(error, data) => {
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se creo el empleado'
          })
          else
            res.send({ 
                message: "Se guardo correctamente",
                data // datos empleado
            })
    })
}

exports.getAll = (req, res) => {
    const empleado = new EmpleadoModel()
    empleado.getAll((error, datas) =>{
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send(datas)
    })
}

exports.getById = (req, res) =>{
    const empleado = new EmpleadoModel() //instancia
    empleado.getById(req.params.id,(error, datas) =>{
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

    const {nombre, edad, administrador, direccion, cp, estado, email, telefono} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!nombre || !edad || administrador === undefined || !direccion || !cp || !estado || !email || !telefono){
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const empleado = new EmpleadoModel({ // Objeto con los nuevos datos
        nombre: req.body.nombre,
        edad: req.body.edad,
        administrador: req.body.administrador,
        direccion: req.body.direccion,
        cp: req.body.cp,
        estado: req.body.estado,
        email: req.body.email,
        telefono: req.body.telefono,
    })

    empleado.update(req.params.id,empleado,(error, data) => { //req todo lo que se envia por  postman
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se modifico el empleado'
          })
          else
            res.send({ 
                message: "Se modifico correctamente",
                data // datos empleado
            })
    })
}

exports.delete = (req, res) => { //req todo lo que se envia por  postman
    const empleado = new EmpleadoModel() //Objeto
    empleado.delete(req.params.id,(error,data) => {
        console.log(data);
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send({
                //Si data tiene algo eliminalo de lo contrario el usuario ya no existe
                message: "Se elimino correctamente el empleado: "
            })
    })
}

