//Se hace petición a la base de datos
const bcrypt = require('bcrypt'); //Encriptar contraseña
const { create } = require('../controllers/empleado');
const { Empleado } = require('../orm/tables');

//Constructor con una clase
class EmpleadoModel{
    constructor(empleado){
        if(empleado){
            this.nombre = empleado.nombre;
            this.edad = empleado.edad;
            this.administrador = empleado.administrador;
            this.direccion = empleado.direccion;
            this.cp = empleado.cp;
            this.estado = empleado.estado;
            this.email = empleado.email;
            this.telefono = empleado.telefono;
            this.contraseña = empleado.contraseña;
        }
    }

    //Insertar en la base de datos
    async create(empleado,resultado){
        //console.log(sequelize)
        empleado.contraseña = await bcrypt.hash(empleado.contraseña, 10);
        Empleado.findOrCreate({
            where: {email: empleado.email},
            defaults: empleado }).then(([empleado, created])=>{
                if(created){
                    resultado(null,empleado); 
                }else{
                    resultado({message: 'El empleado ya existe'}, null); 
                }
        }).catch((error) =>{
            resultado({message: error}, null);
        })
    }

    //then siempre se ejecuta cuando termina
    getAll(resultado){

            Empleado.findAll().then((empleados) =>{
                resultado(null, empleados)
            }).catch((error) => {
                resultado({message: error}, null);
            })   
    }
    //async getById
}

module.exports = EmpleadoModel