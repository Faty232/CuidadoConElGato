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
            if(empleado.contraseña) // Si esta la contraseña en el controlador
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

    getById(idEmp,resultado){
        Empleado.findOne({where: {id: idEmp}}).then((empleado) =>{
            if(empleado){
            resultado(null, empleado)
            }else
            resultado  ({message: "No hay ningún usuario con ese id: " +idEmp}, null)
        }).catch((error) => {
            resultado({message: error}, null);
        }) 
    }

    update(idEmp, empleado, resultado){
        Empleado.update(empleado,{ // Update table
            where:{
                id: idEmp
            }
        }).then((idUser) =>{
            resultado(null,{id: idUser[0], ...empleado}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }
}

module.exports = EmpleadoModel