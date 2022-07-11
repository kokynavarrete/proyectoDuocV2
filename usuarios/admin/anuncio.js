
import { guardarAnuncio } from '../../firebase/firebase.js';


//Evento que arranca la app
window.addEventListener('DOMContentLoaded',async () => {
    
    
    
})


const formularioParbularia = document.getElementById('formulario-agregar-anuncios')


formularioParbularia.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Submited')
    const titulo = formularioParbularia['tituloA'];
    const nombre = formularioParbularia['na'];
    const descripcion = formularioParbularia['descA'];


    guardarAnuncio(titulo.value, nombre.value, descripcion.value)

    formularioParbularia.reset()


})
