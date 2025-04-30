//Programacion asincrona en JS
import fetch from 'node-fetch';

let obtenerCat = 'https://api.nekosia.cat/api/v1/images/catgirl';

(async function conectarAPI() {
    //Manejo de errores con try-catch
    try {
        const respuesta = await (await fetch(obtenerCat)).json();
        console.log(respuesta.image.original.url);
    } catch (error) {
        console.log(error);
    }
})();
