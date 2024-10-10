
// Ejercicio 1

interface Usuario {
    nombre: string;
    edad: number;
}

function saludar(usuario: Usuario): string {
    return `Hola ${usuario.nombre}, tienes ${usuario.edad} años`
}
document.getElementById('usuario')?.addEventListener('submit', function(event) {
    event.preventDefault();

    let nombreElement = document.getElementById('nombre') as HTMLInputElement;
    let edadElement = document.getElementById('edad') as HTMLInputElement;

    if (nombreElement && edadElement) {
        let usuario: Usuario = {
            nombre: nombreElement.value,
            edad: parseInt(edadElement.value, 10)
        };
        alert(saludar(usuario));
    }
});

//Ejercicio 2

interface Producto {
    nombre: string;
    precio: number;
}
const productosIniciales: Producto[] = [
    { nombre: 'Manzana', precio: 1.2 },
    { nombre: 'Pan', precio: 2.5 },
    { nombre: 'Leche', precio: 1.8 }
];
function calcularTotal(productos: Producto[]): number {
    return productos.reduce((total, producto) => total + producto.precio, 0);
}

function listaProductos(productos: Producto[]): string[] {
    return productos.map(producto => `Producto: ${producto.nombre}, Precio: ${producto.precio}`);
}
document.addEventListener('DOMContentLoaded', () => {
    const listadoProductosElement = document.getElementById('listadoProductos');
    const totalElement = document.getElementById('totalProductos');
    if (listadoProductosElement) {
        // @ts-ignore
        listadoProductosElement.innerHTML = listaProductos(productosIniciales);
    }
    if (totalElement) {
        totalElement.innerHTML = `Total: ${calcularTotal(productosIniciales)}`;
    }
});
document.getElementById("productoNuevo")?.addEventListener("submit", function (event) {
    event.preventDefault();

    let nombreProductoElement = document.getElementById('nombreProducto') as HTMLInputElement;
    let precioProductoElement = document.getElementById('precioProducto') as HTMLInputElement;

    if ((nombreProductoElement && precioProductoElement) && (nombreProductoElement.value != "" && precioProductoElement.value != "" )) {
        let producto: Producto = {
            nombre: nombreProductoElement.value,
            precio: parseFloat(precioProductoElement.value)
        };
        productosIniciales.push(producto);
        let listadoProdructosElement = document.getElementById('listadoProductos') as HTMLInputElement;
        let totalElement = document.getElementById('totalProductos');
        if (listadoProdructosElement){
            // @ts-ignore
            listadoProdructosElement.innerHTML = listaProductos(productosIniciales);
        }
        if (totalElement) {
            totalElement.innerHTML = `Total: ${calcularTotal(productosIniciales)}`;
        }
        nombreProductoElement.value = "";
        precioProductoElement.value = "";
    }
});


function calcularDistancia(punto1: { x: number, y: number }, punto2: { x: number, y: number }): number {
    const dx = punto2.x - punto1.x;
    const dy = punto2.y - punto1.y;
    return Math.sqrt(dx * dx + dy * dy);
}
document.getElementById("distanciaPuntos")?.addEventListener("submit", function (event) {
    event.preventDefault();

    let punto1Element = document.getElementById('punto1') as HTMLInputElement;
    let punto2Element = document.getElementById('punto2') as HTMLInputElement;
    let resultadoElement = document.getElementById('totalDispanciaPuntos') as HTMLElement;

    if (punto1Element && punto2Element) {
        const regex = /\((\d+),\s*(\d+)\)/;

        const match1 = punto1Element.value.match(regex);
        const match2 = punto2Element.value.match(regex);

        if (match1 && match2) {
            const punto1 = { x: parseFloat(match1[1]), y: parseFloat(match1[2]) };
            const punto2 = { x: parseFloat(match2[1]), y: parseFloat(match2[2]) };

            let distancia = calcularDistancia(punto1,punto2);
            if (resultadoElement) {
                resultadoElement.innerHTML = `Distancia: ${distancia.toFixed(2)}`;
            }
            console.log(`Punto 1: (${punto1.x}, ${punto1.y})`);
            console.log(`Punto 2: (${punto2.x}, ${punto2.y})`);
        } else {
            console.error("Formato invalido. Usa este formato => (x,y).");
        }
    }
});