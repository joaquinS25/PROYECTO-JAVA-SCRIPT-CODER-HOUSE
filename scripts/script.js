//const carrito = [];
let totalCarrito;
let contenedor = document.getElementById("misprods");
let botonFinalizar = document.getElementById("finalizar");
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
if (carrito.length != 0) {
    console.log("Recuperando carro")
    
    dibujarTabla();
    
}
function dibujarTabla(){
    for(const producto of carrito){
        document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    }
    totalCarrito = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar $: "+totalCarrito;
}
function renderizarProds() {
    for (const producto of productos) {
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${producto.foto} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">S/. ${producto.precio}</p>
                    <button id="btn${producto.id}" class="btn btn-primary">Comprar</button>         
                </div>
            </div>
        `;
    }

    //EVENTOS
    productos.forEach(producto => {
        //evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener("click", function () {
            agregarAlCarrito(producto);
        });
    })
}

renderizarProds();

function agregarAlCarrito(productoComprado) {
    carrito.push(productoComprado);
    console.table(carrito);
    //alert("Producto: "+productoComprado.nombre+" agregado al carrito!");
    Swal.fire({
        title: productoComprado.nombre,
        text: 'Agregado al carrito',
        imageUrl: productoComprado.foto,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: productoComprado.nombre,
        showConfirmButton: false,
        timer: 1500
    })
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoComprado.id}</td>
            <td>${productoComprado.nombre}</td>
            <td>${productoComprado.precio}</td>
            <td><button><i class="bi bi-trash3-fill"></i></button> </td>
        </tr>
    `;
    totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText = "Total a pagar S/.: " + totalCarrito;
    //storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

botonFinalizar.onclick = () => {
    
    carrito = [];
    document.getElementById("tablabody").innerHTML = "";
    let infoTotal = document.getElementById("total");
    infoTotal.innerText = "Total a pagar $: ";
    
    Toastify({
        text: "Pronto recibirá un mail de confirmacion",
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast();
    
    localStorage.removeItem("carrito"); 
}





