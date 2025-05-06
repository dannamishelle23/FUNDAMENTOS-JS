//Local Storage

/*fetch("https://api.thecatapi.com/v1/images/search")
  .then(response => response.json())
  .then(data => {
    if (data && data.length > 0 && data[0].url) {
      const catImageUrl = data[0].url;
      guardarLocalStorage({ imageUrl: catImageUrl });
    }
  })
  .catch(error => console.error("Error al obtener la imagen:", error));

const guardarLocalStorage = (data) => {
  localStorage.setItem('catData', JSON.stringify(data));
};

// Para recuperar la imagen al cargar la página:
const catDataGuardada = localStorage.getItem('catData');
if (catDataGuardada) {
  const gato = JSON.parse(catDataGuardada);
  console.log("URL de la imagen del gato guardada:", gato.imageUrl);
}
*/

//ES MODULES

//import reserva from './reservas.js'
//loginUser("Danna", "Condado Shopping", 990754359)

//Para importar varias cosas. Se usan llaves
import {reserva, clientesFelices} from './reservas.js'
reserva("Danna", "Condado Shopping", 990754359)