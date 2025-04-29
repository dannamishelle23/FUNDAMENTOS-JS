//Objetos
const celulares = {
   marca: "Honor",
   modelo: "7 pro",
   precio: 985.00,
   pantalla: {
    tipo: "OLED",
    caracteristicas: {
    tamanio: "6.78 pulgadas",
    resolucion: "1200 x 2652 pixeles",
    }
   },
   capacidadBateria: "5270 mAh"
}

//Acceder a la informacion
const { marca, modelo, precio, pantalla: { caracteristicas }, capacidadBateria } = celulares;
console.log("Marca:", marca, ", Modelo:", modelo, ", Precio:", precio, ", Características:", caracteristicas, 
    ", Capacidad de la Batería:", capacidadBateria);
