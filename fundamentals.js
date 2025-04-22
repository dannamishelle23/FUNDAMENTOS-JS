// Variables
// Contenedor de informacion
// ES6 
// let - const
// Ya no se utiliza var 

//Tipos de datos primitivos
let numOrden = 125        //int 
let modulo = "Mis órdenes"   //string 
let status = true         //booleano
let tipoPago = "E"      //char
let precioFinal = 102.93         //float
const CI = 1728209410           //int (inmutable)

//Tipos de datos compuestos

//Arrays
let ordenes = ["Camiseta", "Zapatos", "Cartera"]
//Desafio: Objeto vs JSON
let detalleOrden = {
    id: 10,
    estado: "Activo",
    items: ["Camiseta", "Zapatos", "Cartera"],              //Objeto
    precio: 100.50
}

//JSON
let ordenDetalle = {
    "nombre": "Danna",
    "edad": 21,
    "facultad": "ESFOT"
}

let nombreCompleto = "Danna Lopez"
nombreCompleto.length               //Longitud de la cadena
nombreCompleto.toUpperCase()          // Convertir a mayúsculas
nombreCompleto.trim()                 // Eliminar espacios en blanco
nombreCompleto.charAt(0)              // Obtener el primer caracter
nombreCompleto.includes("Danna")      //Verificar si existe un texto

console.log(nombreCompleto.length)

//ES6: Template String
console.log(`Bienvenido - ${nombreCompleto}`)          //Concatenar

//Numbers
let cuotas = "6"
console.log(cuotas + 3)

//ES6: Convertir string a un numero entero
console.log(+cuotas + 3)
console.log(typeof(cuotas))

//Orden de precedencia de los operadores aritmeticos
console.log(4 * 3 ** 2)         //Output: 36. Primero se ejecuta la potencia. Siempre se resuelve la operacion
                                // desde la derecha. 

// Booleanos
let saldoUsuario = 1000
let saldoTarjeta = "1000"

//Comparacion solo del valor
console.log(saldoUsuario == saldoTarjeta)

//ES6: Comparacion Estricta
//Comparacion del valor y del tipo de dato
console.log(saldoUsuario == saldoTarjeta)


const carritoCompras = []
if (carritoCompras.length === 0) {
    console.log("El carrito vacio")
}
else {
    console.log("El carrito tiene productos")
}
// ES6: Operador ternario
const mensaje = carritoCompras.length === 0 ? "El carrito vacio" : "El carrito tiene productos"