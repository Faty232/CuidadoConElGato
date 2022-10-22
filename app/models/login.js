//Se hace petición a la base de datos
const { Login, Empleado } = require('../orm/tables');
const bcrypt = require ('bcrypt');
const {addDays} = require('date-fns');
const jwt = require('jsonwebtoken');

//Constructor con una clase
class LoginModel{
    constructor(login){
        if(login){
            this.email = login.email;
            this.contraseña = login.contraseña;
        }
    }

    //Validar el email y/o contraseña 
    async create(login,resultado2){
        Empleado.findOne({
            where: {email: login.email}
        }).then(async (sesion)=>{
            const resultado = await bcrypt.compare(login.contraseña, sesion.dataValues.contraseña)
            if(!resultado){
                resultado({message: 'Usuario o contraseña incorrecta'})
            }else{
                const fecha = addDays(new Date(), 30)
                const token = jwt.sign({email: login.email}, 'shhhhh')
                Login.create({
                    EmpleadoId: sesion.dataValues.id,  
                    fechCad: fecha,
                    token: token
                }).then((respuesta)=>{
                    resultado2(null, {message: 'Inicio sesión exitoso'})
                }).catch(()=>{
                    resultado2({message: 'No se pudo iniciar sesión.... Intetalo más tarde'})
                })
            }
        }).catch((error) =>{
            resultado2({message: 'Usuario o contraseña incorrecta'})
        })
    }

    getByToken(token,resultado){
        Login.findOne({where: {token: token}}).then((login) =>{
            if(login){
            resultado(null, login)
            }else
            resultado  ({message: "No hay ningún inicio de sesión con ese token: " + token}, null)
        }).catch((error) => {
            resultado({message: error}, null);
        }) 
    }

    logOut(token, resultado){
        Login.destroy({ // Delete table
            where:{
                token: token
            }
        }).then((token) =>{
            resultado(null,{token: token[0]}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }
}

module.exports = LoginModel
