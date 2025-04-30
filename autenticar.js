
const login = (username, password) => {
    console.log(`Welcome - ${username}`)
}

const likes = 123 
//CommonJS
//module.exports = login     

//! ESModules
//1 sola cosa
//export default login             //Renombrar la funcion

//Varias cosas
export {
    login,
    likes
}