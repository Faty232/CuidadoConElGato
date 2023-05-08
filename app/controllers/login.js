const LoginModel = require('../models/login');

exports.create = (req, res) => {
    const route = req.route
    console.log(req)
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

    if (route.path !== '/cliente')
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
    else 
        login.createCliente(login,(error, data) => {
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

exports.getByToken = (req, res) =>{
    const login = new LoginModel() //instancia
    login.getByToken(req.params.token,(error, datas) =>{
        if(error)
        res.status(500).send({  
            message: error.message || 'Algo ocurrio mientras se obtenia el inicio de sesion'
        })
        else
          res.send(datas)
    })
}

exports.logOut = (req, res) => { //req todo lo que se envia por  postman
    const login = new LoginModel() //Objeto
    login.logOut(req.params.token,(error,data) => {
        console.log(data)
        if(error)
         res.status(500).send({
            message: error.message || 'Algo ocurrio mientras se iniciaba sesión'
         })
         else
            res.send({
                //Si data tiene algo eliminalo de lo contrario el usuario ya no existe
                message: "Se salio de la sesión correctamente "
            })
    })
}