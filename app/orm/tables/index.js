// Foranea de Empleado a Login
const Empleado = require('./Empleado')
const Login = require('./Login')
const PedidoClie = require('./PedidoClie')
const Distribuidor = require('./Distribuidor')
const Devolucion = require('./Devolucion')
const Cliente = require('./Cliente')
const DireEnt = require('./DireEnt');
const Producto = require('./Producto');
const TipoPrenda = require('./TipoPrenda');
const Categoria = require('./Categoria');
const Proveedor = require('./Proveedor');
const Marca = require('./Marca');
const Almacen = require('./Almacen');

Empleado.hasMany(Login); // El empleado puede tener 1 o muchos inicios de sesión
Login.belongsTo(Empleado); //Login esta haciendo referencia a empleado

//Foranea de Cliente a Login
Cliente.hasMany(Login); 
Login.belongsTo(Cliente); 

//Foranea de Empleado a PedidoClie
Empleado.hasMany(PedidoClie); 
PedidoClie.belongsTo(Empleado);

//Foranea de Distribuidor a PedidoClie
Distribuidor.hasMany(PedidoClie); 
PedidoClie.belongsTo(Distribuidor); 

//Foranea de PedidoClie a Devolucion
PedidoClie.hasMany(Devolucion); 
Devolucion.belongsTo(PedidoClie); 

//Foranea de Cliente a PedidoClie
Cliente.hasMany(PedidoClie); 
PedidoClie.belongsTo(Cliente); 

//Foranea de DireEnt a PedidoClie
DireEnt.hasMany(PedidoClie); 
PedidoClie.belongsTo(DireEnt); 

//Foranea de Cliente a DireEnt
Cliente.hasMany(DireEnt); 
DireEnt.belongsTo(Cliente); 

//Foranea de Producto a PedidoClie
Producto.hasMany(PedidoClie); 
PedidoClie.belongsTo(Producto); 

//Foranea de TipoPrenda a Producto
TipoPrenda.hasMany(Producto); 
Producto.belongsTo(TipoPrenda); 

//Foranea de Categoria a Producto
Categoria.hasMany(Producto); 
Producto.belongsTo(Categoria); 

//Foranea de Proveedor a Producto
Proveedor.hasMany(Producto); 
Producto.belongsTo(Proveedor); 

//Foranea de Marca a Producto
Marca.hasMany(Producto); 
Producto.belongsTo(Marca); 

//Foranea de Producto a Almacen
Producto.hasMany(Almacen); 
Almacen.belongsTo(Producto); 

module.exports ={
    Empleado,
    Login,
    PedidoClie,
    Distribuidor,
    Devolucion,
    Cliente,
    DireEnt,
    Producto,
    TipoPrenda,
    Categoria,
    Proveedor,
    Almacen,
    Marca
 } 

 