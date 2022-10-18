//Se hace petición a la base de datos
const { Producto } = require('../orm/tables');

//Constructor con una clase
class ProductoModel{
    constructor(producto){
        if(producto){
            this.nombre = producto.nombre;
            this.descripcion = producto.descripcion;
            this.color = producto.color;
            this.talla = producto.talla;
            this.precio = producto.precio;
            this.estatus = producto.estatus;
            this.cantidad = producto.cantidad;
            this.TipoPrendaId = producto.TipoPrendaId;
            this.CategoriumId = producto.CategoriumId;
            this.ProveedorId = producto.ProveedorId;
            this.MarcaId = producto.MarcaId;
        }
    }

    //Insertar en la base de datos
    async create(producto, resultado){
        Producto.create(producto).then((producto)=>{
            resultado(null,producto); 
        }).catch((error) =>{
            resultado({message: error}, null);
        })
    }

    getAll(resultado){
        Producto.findAll().then((producto) =>{
            resultado(null, producto)
        }).catch((error) => {
            resultado({message: error}, null);
        })   
    }

    getById(idPro,resultado){
        Producto.findOne({where: {id: idPro}}).then((producto) =>{
            if(producto){
            resultado(null, producto)
            }else
            resultado  ({message: "No hay ningún producto con ese id: " +idPro}, null)
        }).catch((error) => {
            resultado({message: error}, null);
        }) 
    }


    update(idPro, producto, resultado){
        Producto.update(producto,{ // Update table
            where:{
                id: idPro
            }
        }).then((idPro) =>{
            resultado(null,{id: idPro[0], ...producto}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }

    delete(idPro, resultado){
        Producto.destroy({ // Delete table
            where:{
                id: idPro
            }
        }).then((idPro) =>{
            resultado(null,{id: idPro[0]}) //...Evitar que te cree un dato con el mismo nombre
        }).catch((error) => {
            resultado({message: error}, null);
        })
    }
}

module.exports = ProductoModel