import { guardarAlumno } from '../../firebase/firebase.js';
//Evento que arranca la app
window.addEventListener('DOMContentLoaded', () => {
    console.log("trabajando alumno")
});

const formularioAlumno = document.getElementById('formulario-agregar-alumno');

formularioAlumno.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Submited')
    const nombre = formularioAlumno['nombreA'];
    const rut = formularioAlumno['rutA'];
    const edad = formularioAlumno['edadA'];
    const direccion = formularioAlumno['direccionA'];

    guardarAlumno(nombre.value, rut.value, edad.value, direccion.value)

    formularioAlumno.reset()


});