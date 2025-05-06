//Modulos en JS

const reserva = (nombre, direccion, telefono) => {
    console.log(`Hola - ${nombre} - Su dirección es ${direccion} Su cita en el hospital MediPet ha sido guardada con éxito. 
        Se enviará la confirmación de su reserva al número de teléfono ${telefono}`)
}  

//! ESModules
//1 sola cosa
//export default login             //Renombrar la funcion

//Varias cosas
const clientesFelices = 10000
console.log(`En nuestra clínica hay ${clientesFelices} clientes contentos con nuestro servicio.`)
export {
    reserva,
    clientesFelices
}