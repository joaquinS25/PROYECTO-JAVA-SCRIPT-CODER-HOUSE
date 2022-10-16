
function carroCompra() {
    let articulo = prompt("Ingrese el articulo que desea comprar");
    let cantidad = prompt("Ingrese la cantidad que desea comprar");
    while (articulo != "s" && cantidad != 0) {
        switch (articulo) {
            case "Laptop":
                alert("El total a pagar de la laptop lenovo es:" + 1800 * cantidad);
                break;
                case "All in one":
                    alert("Total a pagar de la All in one es: " + 1500 * cantidad);
                    break;
            case "Teclado y mouse inalambrico":
                alert("El Total a pagar del teclado y mouse es: " + 75 * cantidad);
                break;
                case "Monitor":
                    alert("El Total a pagar del Monitor es: " + 2000 * cantidad);
                    break;
                    case "Computadora gamer":
                        alert("El Total a pagar de la computadora gamer es: " + 3000 * cantidad);
                        break;
                        case "Parlantes":
                            alert("El Total a pagar de los parlantes es: " + 100 * cantidad);
                            break;
                            case "m.2":
                                alert("El Total a pagar del m.2 es: " + 400 * cantidad);
                                break;
                                case "RAM":
                                    alert("El Total a pagar la RAM es: " + 200 * cantidad);
                                    break;
                                    case "HDD":
                                        alert("El Total a pagar del HDD es: " + 150 * cantidad);
                                        break;
                                        case "Televisor":
                                            alert("El Total a pagar del Televisor es: " + 1950 * cantidad);
                                            break;
                                            default:
                alert("Articulo sin stock");
        }
        articulo = prompt("Ingrese el articulo que desea comprar (s para salir)");
        cantidad = prompt("Ingrese la cantidad que desea comprar");
    }
}
carroCompra();

//array de articulos
const Articulos = [
    {
        id: 1,
        nombre: "Parlantes logitech",
        precio: 100
    },
    {
        id: 2,
        nombre: "Disco solido kingstong",
        precio: 250
    },
    {
        id: 3,
        nombre: "Laptop Lenovo core i3",
        precio: 1800
    },
    {
        id: 4,
        nombre: "Monitor gigabyte",
        precio: 200
    }
];
console.log(Articulos);
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
function crearProducto() {
    let carrito = []
    
    const producto = new Producto(prompt(`Ingrese el id del producto: `), prompt(`Ingrese el nombre del producto: `),
    prompt(`Ingrese el precio del producto: `));
    carrito.push(producto);
    console.log(carrito)
    for (const producto of carrito) {
        console.log(producto.id + " " + producto.nombre + " "+producto.precio+"\n");
    }
}
let menuOpcion = prompt(`Desea agregar otro producto? (si/no)`);
while (menuOpcion != "no") {
    if (menuOpcion !="no") {
        crearProducto()
    }
    menuOpcion = prompt(`Desea agregar otro producto? (si/no)`);
}
console.log("La nueva lista de prductos es: ");
//concatenar dos arrais
Articulos = Articulos.concat(carrito);
console.log(Articulos);

//ordenar por precio
Articulos.sort((a,b)=>a.precio - b.precio);
console.log(Articulos);   
//Buscar los articulos mas baratos que hay en la tienda
const listaArticulosBaratos = Articulos.filter((Articulos) => Articulos.precio < 200);
console.log("LOS ARTICULOS QUE CUESTAN MENOS DE 200 SON: ")
console.log(listaArticulosBaratos);