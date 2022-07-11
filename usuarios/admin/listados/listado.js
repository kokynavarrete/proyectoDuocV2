import { listarAlumnos } from '/firebase/firebase.js';

const contenedorListaAlumnos = document.getElementById('listado')
//Evento que arranca la app
window.addEventListener('DOMContentLoaded',async () => {
    
  const querySnapshot =  await listarAlumnos()
  let html = ''
  querySnapshot.forEach(doc =>{
    const alumnos = doc.data()
      html += `
             <table class="c-lista">
              <tr>
              <th>RUT</th>
              <th>Nombre</th>
              <th>Edad</th>
              </tr>
              <tr>
              <td> ${alumnos.rut}</td>
              <td>${alumnos.nombre}</td>
              <td>${alumnos.edad}</td>
              </tr>
            <table>
        `
  })

  contenedorListaAlumnos.innerHTML = html
  
    
})
