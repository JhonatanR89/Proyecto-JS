datos = JSON.parse(localStorage.getItem("datos")) || [];


// esta funcion ordena los datos del array 

datos.sort((a, b) => parseFloat(a.dia) - parseFloat(b.dia));

datos.forEach((h)=> {
  let tablaCitas = document.getElementById("infoCitas");
  let espaciado = document.createElement('br')
  tablaCitas.appendChild(espaciado)
  
  let fecha = document.createElement('p')
  fecha.innerHTML = `<span class="font-weight-bolder">Dia: </span> ${h.dia}`;
  tablaCitas.appendChild(fecha)

  let hora =document.createElement('p')
  hora.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${h.hora}`;
  tablaCitas.appendChild(hora)

  let nombre = document.createElement('p')
  nombre.innerHTML = `<span class="font-weight-bolder">Nombre: </span> ${h.nombre} ${h.apellido}`
  tablaCitas.appendChild(nombre)

  let placa = document.createElement('p')
  placa.innerHTML = `<span class="font-weight-bolder">Placa: </span> ${h.placa}`
  tablaCitas.appendChild(placa);

});

