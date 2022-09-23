//Hacer algo antes de que se haga la consulta
const EmpleadoModel = require('../models/empleado');
const { Empleado } = require('../orm/tables');

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
    console.log(empleado)
    empleado.getAll((error, datas) =>{
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se obtenian los datos'
         })
         else
            res.send(datas)
    })
}