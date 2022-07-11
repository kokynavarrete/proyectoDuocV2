
import { guardarParvularia } from '../../firebase/firebase.js';


//Evento que arranca la app
window.addEventListener('DOMContentLoaded',async () => {
    
    
    
})



const formularioParbularia = document.getElementById('formulario-agregar-parvularia')


formularioParbularia.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Submited')
    const nombre = formularioParbularia['nombreP'];
    const rut = formularioParbularia['rutP'];
    const edad = formularioParbularia['edadP'];
    const direccion = formularioParbularia['direccionP'];

    guardarParvularia(nombre.value, rut.value, edad.value, direccion.value)

    formularioParbularia.reset()


})













