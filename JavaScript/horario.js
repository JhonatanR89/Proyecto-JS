//----------------------------------se inicializa Horario---------------------------

let cuadro = [
  { hora: "7:30 AM", Asesor: "Asesor Uno", id: 0 },
  { hora: "7:30 AM", Asesor: "Asesor Dos", id: 1 },
  { hora: "8:00 AM", Asesor: "Asesor uno", id: 2 },
  { hora: "8:00 AM", Asesor: "Asesor Dos", id: 3 },
  { hora: "8:30 AM", Asesor: "Asesor Uno", id: 4 },
  { hora: "8:30 AM", Asesor: "Asesor Dos", id: 5 },
  { hora: "9:00 AM", Asesor: "Asesor Uno", id: 7 },
  { hora: "9:00 AM", Asesor: "Asesor Dos", id: 8 },
  { hora: "9:30 AM", Asesor: "Asesor Uno", id: 9 },
  { hora: "9:30 AM", Asesor: "Asesor Dos", id: 10 },
  { hora: "10:00 AM", Asesor: "Asesor Uno", id: 11 },
  { hora: "10:00 AM", Asesor: "Asesor Dos", id: 12 },
];

Horario = JSON.parse(localStorage.getItem("citas")) || [];
let horaDisponible = document.getElementById("tablaHora");
let cuerpoTablaH = document.createElement("tbody");

Horario.forEach((h) => {
  horaDisponible.innerHTML = "";
  let fila = document.createElement("tr");

  let td = document.createElement("td");
  td.innerText = h.hora;
  fila.appendChild(td);

  td = document.createElement("td");
  td.innerText = h.Asesor;
  fila.appendChild(td);

  let asignar = document.createElement("td");
  asignar.innerHTML = `<a id="boton${h.id}" class="btn btn-primary btn-sm" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#ventana-datos">Reservar</a>`;

  fila.appendChild(asignar);
  cuerpoTablaH.appendChild(fila);
  horaDisponible.appendChild(cuerpoTablaH);

  let boton = document.getElementById(`boton${h.id}`);
  boton.addEventListener("click", () => {
    ConsultaDatos(`${h.id}`);
  });
});
let ArregloDatos = [];

function ConsultaDatos(i) {
  let placa = document.getElementById("datosCita");
  let inputPlaca = document.createElement("form");
  inputPlaca.innerHTML = `
                                <input type="text" id="placa"  placeholder="Placa" style="text-transform:uppercase" oninput="this.value = this.value.toUpperCase()">
                                <input type="text" id="nombre"  placeholder="Nombre" style="text-transform:uppercase" oninput="this.value = this.value.toUpperCase()">
                                <input type="text" id="Apellido"  placeholder="Apellido" style="text-transform:uppercase" oninput="this.value = this.value.toUpperCase()">
                                
                                <button type="button" id="ir" name="Agendar" class="btn btn-success btn-sm data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#ventana-confirmacion" >Agendar</button>
                            
                        `;

  placa.replaceChildren(inputPlaca);

  let botonIr = document.getElementById("ir");
  botonIr.addEventListener("click", () => {
    let ConsultaPlaca = document.getElementById("placa").value;
    let ConsultaNombre = document.getElementById("nombre").value;
    let ConsultaApelliddo = document.getElementById("Apellido").value;

    ArregloDatos.push(ConsultaPlaca, ConsultaNombre, ConsultaApelliddo);

    horaSeleccionada(i);
  });
}
let DatosCitas = [];

function horaSeleccionada(i) {
  
  let consultainfocita = Horario.find((elemento) => {
    return elemento.id == i;
  });
  
  let dia = FechaSelecionada;
  let modalCita = document.getElementById("parafoCita");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `<p> Gracias ${ArregloDatos[1]} ${ArregloDatos[2]}  por depositar tu confianza en nosotros, la cita de tu vehiculo de placas ${ArregloDatos[0]} ha sido agendada para el dia ${dia} a las ${consultainfocita.hora}, con el ${consultainfocita.Asesor} </p>`;
  DatosCitas.push({dia:dia, placa:ArregloDatos[0], nombre:ArregloDatos[1], apellido:ArregloDatos[2], hora:consultainfocita.hora});
  modalCita.replaceChildren(parrafo);
  Horario.splice(i, 1);
  
  localStorage.setItem('datos', JSON.stringify(DatosCitas))
  for (let i = ArregloDatos.length; i > 0; i--) {
    ArregloDatos.pop();
  }

}
let buscarCita = document.getElementById("Buscar");
let tituloModal = document.getElementById("tituloHorario");
let cuerpoModal = document.getElementById("bodyModal");




