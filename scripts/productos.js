const productos = [{
        id: 1,
        foto: "../imagenes/all-in-one.jpg",
        nombre: "All in One",
        precio: 1500
    },
    {
        id: 2,
        foto: "../imagenes/laptop.jpg",
        nombre: "Laptop lenovo",
        precio: 1800
    },
    {
        id: 3,
        foto: "../imagenes/monitor.jpg",
        nombre: "Monitor Gigabyte",
        precio: 2000
    },
    {
        id: 4,
        foto: "../imagenes/parlante.jpg",
        nombre: "Parlante Logitech",
        precio: 100
    },
    {
        id: 5,
        foto: "../imagenes/teclado_mouse.jfif",
        nombre: "Teclado y Mouse",
        precio: 80
    },
    {
        id: 6,
        foto: "../imagenes/disco_solido.jpg",
        nombre: "Disco solido 480gb",
        precio: 170
    },
    {
        id: 7,
        foto: "../imagenes/m.2.jpg",
        nombre: "m.2 480GB",
        precio: 180
    },
    {
        id: 8,
        foto: "../imagenes/iphone12.jpg",
        nombre: "Iphone 12 pro max",
        precio: 2500
    },
    {
        id: 9,
        foto: "../imagenes/fuente.png",
        nombre: "Fuente para pc",
        precio: 250
    },
    {
        id: 10,
        foto: "../imagenes/mouse.jpg",
        nombre: "Mouse Halion inalambrico",
        precio: 50
    },
    {
        id: 11,
        foto: "../imagenes/teclado_mouse.jfif",
        nombre: "Teclado y Mouse",
        precio: 80
    },
    {
        id: 12,
        foto: "../imagenes/disco_solido.jpg",
        nombre: "Disco solido 480gb",
        precio: 170
    },
];
const productosStorage = [{ id: 1,  producto: "All in One", precio: 1500 },
                  {  id: 2,  producto: "Laptop lenovo", precio: 1800 },
                  {  id: 3,  producto: "Monitor Gigabyte"  , precio: 2000},
                  {  id: 4,  producto: "Parlante Logitech" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listaProductos", JSON.stringify(productosStorage));

class Producto {
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = obj.precio;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos2 = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados)
    productos2.push(new Producto(objeto));
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productos2)
    producto.sumaIva();

console.log(productos2);