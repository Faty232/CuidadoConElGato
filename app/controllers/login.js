const LoginModel = require('../models/login');

exports.create = (req, res) => {
    if(Object.entries(req.body).length === 0) //Convierte en un arreglo en objeto
    res.status(400).send({
        message: "El body esta vacío"
    })

    const {email, contraseña} = req.body //req.body es el que contiene los datos
    //undefined, null, false, 0
    if(!email || !contraseña){ //! si no le estas pasando un nombre
        res.status(400).send({
            message: "Los datos estan incompletos"
        })
    }

    const login = new LoginModel({
        email: req.body.email,
        contraseña: req.body.contraseña
    })

    login.create(login,(error, data) => {
        if(error)
          res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se creo el login'
          })
          else
            res.send({ 
                data 
            })
    })
}