import { listarParvularias } from '/firebase/firebase.js';

const contenedorListarParvularias = document.getElementById('listado-p')
//Evento que arranca la app
window.addEventListener('DOMContentLoaded',async () => {
    
  const querySnapshot2 =  await listarParvularias()
  let html2 = ''
  querySnapshot2.forEach(doc =>{
    const parvularias = doc.data()
      html2 += `
             <table class="c-lista">
              <tr>
              <th>RUT</th>
              <th>NOMBRE</th>
              <th>EDAD</th>
              </tr>
              <tr>
              <td> ${parvularias.rut}</td>
              <td>${parvularias.nombre}</td>
              <td>${parvularias.edad}</td>
              </tr>
            <table>
        `
  })
 

  contenedorListarParvularias.innerHTML = html2;
    
    
    
})
