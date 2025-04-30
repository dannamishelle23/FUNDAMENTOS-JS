let user = {
    name: "Juan",
    lastName:"Perez",
    address: {
        city: "Guayaquil"
    } 
};

let userSkills = {
    frontend: ["HTML", "CSS", "JS"]
};

const allInformation = [user, userSkills]
console.log(allInformation)

//ES6 - nombres abreviados de propiedades
const nameDevice = "Computadora"

//  Functions

//Callback: Funcion que pasa como argumento a otra funcion 
function mostrarBienvenida(nombre) {
    console.log(`Bienvenido - ${nombre}`);
}

function registrarUsuario(callback) {
    const user = "Mishelle"
    callback(user)
}

//Se pasa la funcion mostrarBienvenida como argumento
registrarUsuario(mostrarBienvenida)

const products = ["TV", "Laptop", "Tablet", "Celular"]
const prices = [1000,1500,350,502.11]

//ForEach
products.forEach((product) => {console.log(product)})

//Map: Crea un arreglo con los resultados de la llamada a una funcion (elementos modificados)
//3 formas
const newProductsOptionOne = products.map((p) => {
    return p.toLocaleUpperCase()
})

const newProductsOptionTwo = products.map((p) => (
    p.toLocaleUpperCase()
))

const newProductsOptionThree = products.map(p => p.toLocaleUpperCase())

const items = products.filter((p) => {
    return p !== "TV"
})

console.log(items)

//Spread operator: Crea un nuevo array
const newItems = [...products, ...prices]
console.log(newItems)

//find()
const findItem = products.find(p => p === "iphone15")
console.log(findItem)

const encontrarItem = products.find(p => p === "Tablet")
console.log(encontrarItem)

//Push: Agrega nuevos elementos al final del array
products.push("Smartwatch")

//Unshift: Agrega elementos al inicio del arreglo
products.unshift("Teclado")
products.pop() //Remueve el ultimo elemento del arreglo
products.shift()  // Remueve el primer elemento del arreglo

const newItemsSlice = products.slice(0,2)
console.log(newItemsSlice) //Devuelve el arreglo con los elementos modificados, pero no cambia el array original

//include(): Verificar si el elemento está dentro del arreglo o no
products.includes("Celular") ? console.log("Existe") : console.log("No existe")

products.length === 3 ? console.log("Descuento") : console.log("No aplica descuento")

//reduce
const subTotal = prices.reduce((ac, price) => ac + price,0)          //ac es el acumulador. Salida: 3600



//Promises

const conexionBDDExterna = (datosConexion) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datosConexion ? resolve("Conexion exitosa") : reject("Error");
        }, 3000)
    })
}

//Primera forma de manejar promesas. 
// Con .then y .catch
conexionBDDExterna(true)
    .then((r) => console.log("*************", r))      //Maneja promesas cumplidas con exito
    .catch((e) => console.log(e))       // Maneja promesas rechazadas

//2da forma. async - await
async function conexionBDDExternaMySQL() {
    try {
        const response = await conexionBDDExterna(true)
        console.log("------->", response)
    } catch(error) {
        console.log(error)
    }
}

conexionBDDExternaMySQL()

const obtenerProductos = fetch('https://fakestoreapi.com/products')
obtenerProductos
    .then(r => r.json())
    .then(r => console.log(`${r[0].title} - ${r[0].price}`))        //Iterar sobre los elementos del primer objeto
    .catch(e => console.log(e))

async function obtenerproductosAPITemu() {
    try {
        const request = await fetch('https://fakestoreapi.com/products')
        const response = await request.json()
        console.log(`${response[1].title} - ${response[1].price}`)
    } catch(error) {
        console.log(error)
    }
}

obtenerproductosAPITemu()

/*fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(r => r.json())
    .then(data => {
        let user = {
            name: data.name,
            email: data.email
        }
    guardarLocalStorage(user)
    })
    .catch(e => console.log(e))

//Metodo para guardar la informacion en la base de datos
const guardarLocalStorage = (data) => {
    localStorage.setItem('usuario', JSON.stringify(data))           //Convierte un valor de JS a un JSON
}*/


//ES MODULES

//1 sola cosa 
//import login from './autenticar.js'
//loginUser("Danna", 172820)

//Varias cosas
import {login, likes} from './autenticar.js'
console.log(likes)
login("Danna", "172820")