// inicializando los select
let $modelo = document.getElementById("modelo");

// inicializando los arreglos
let opt0 = new Array("A1", "A3", "A4", "A6", "A8", "Q2", "Q3", "Q5", "Q8");
let opt1 = new Array(
  "Gol/Voyage",
  "Polo/virtus",
  "Jetta",
  "Golf",
  "Cross fox/Fox xtreme",
  "T-Cross",
  "Taos",
  "Tiguan",
  "Touareg",
  "Amarok"
);
let opt2 = new Array("Ibiza", "Cupra", "Leon", "Bocanegra", "Arona");

function mostrarmarca() {
  let elementos = document.getElementById("marca").value;
  if (elementos != "") {
    mod = eval("opt" + elementos);
    num_mod = mod.length;
    document.modelos.opt.length = num_mod;

    for (i = 0; i < num_mod; i++) {
      document.modelos.opt.options[i].value = mod[i];
      document.modelos.opt.options[i].text = mod[i];
    }
  } else {
    document.modelos.opt.length = 1;
    document.modelos.opt.options[0].value = "-";
    document.modelos.opt.options[0].text = "-";
  }
  document.modelos.opt.options[0].selected = true;
}

function obtmodelo() {
  let obtmod = document.getElementById("modelo").value;

  imagenmodelos(obtmod);
}

function ir(km, t) {
  let datokm = document.getElementById("km").value;
  let datot = document.getElementById("t").value;

  vehiculo(datokm, datot);
  modelos.reset();
}

function vehiculo(km, tiempo) {
  const repuestos = new Array();

  if (km <= 10000 && tiempo <= 12) {
    repuestos.push(
      { repuesto: "Filtro De Aire", precio: 150000 },
      { repuesto: "Filtro De Aceite", precio: 90000 },
      { repuesto: "Aceite De Motor", precio: 80000 },
      { repuesto: "Shampoo Lavaparabrisas", precio: 15000 },
      { repuesto: "Mano De Obra", precio: 230000 }
    );
  } else if (km <= 20000 && tiempo <= 24) {
    repuestos.push(
      { repuesto: "Filtro De Aire", precio: 150000 },
      { repuesto: "Filtro De Aceite", precio: 90000 },
      { repuesto: "Filtro De Polen", precio: 210000 },
      { repuesto: "Aceite De Motor", precio: 80000 },
      { repuesto: "Shampoo Lavaparabrisas", precio: 15000 },
      { repuesto: "Mano De Obra", precio: 250000 }
    );
  } else if (km <= 30000 && tiempo <= 36) {
    repuestos.push(
      { repuesto: "Filtro De Aire", precio: 150000 },
      { repuesto: "Filtro De Aceite", precio: 90000 },
      { repuesto: "Aceite De Motor", precio: 80000 },
      { repuesto: "Shampoo Lavaparabrisas", precio: 15000 },
      { repuesto: "Mano De Obra", precio: 230000 }
    );
  } else if (km <= 40000 && tiempo <= 48) {
    repuestos.push(
      { repuesto: "Filtro De Aire", precio: 150000 },
      { repuesto: "Filtro De Aceite", precio: 90000 },
      { repuesto: "Filtro De Polen", precio: 210000 },
      { repuesto: "filtro De Combustible", precio: 255000 },
      { repuesto: "Aceite de motor", precio: 80000 },
      { repuesto: "Shampoo Lavaparabrisas", precio: 15000 },
      { repuesto: "Mano De Obra", precio: 290000 }
    );
  } else if (km <= 50000 && tiempo <= 60) {
    repuestos.push(
      { repuesto: "Filtro De Aire", precio: 150000 },
      { repuesto: "Filtro De Aceite", precio: 90000 },
      { repuesto: "Aceite De Motor", precio: 80000 },
      { repuesto: "kit Correa Accesorios", precio: 438000 },
      { repuesto: "Shampoo Lavaparabrisas", precio: 15000 },
      { repuesto: "Mano De Obra", precio: 430000 }
    );
  } else {
    alert("lo sentimos no tenemos un plan de mantenimiento para tu vehículo");
  }

  let tablaRepuestos = document.getElementById("tabla");
  let cuerpoTabla = document.createElement("tbody");

  repuestos.forEach((elemento) => {
    tablaRepuestos.innerHTML = "";
    let fila = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = elemento.repuesto;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = elemento.precio;
    fila.appendChild(td);

    let total = document.createElement("td");
    total.innerText = elemento.precio;
    cuerpoTabla.appendChild(fila);
    tablaRepuestos.appendChild(cuerpoTabla);
  });
}

function imagenmodelos(mod) {
  let compararModelos = imgModelos.find((element) => {
    return element.modelo === mod;
  });
  let imagen = document.getElementById("cardModelo");
  imagen.setAttribute("src", compararModelos.img);
  console.log(imagen);
}


$(() => {
  $('#flexSwitchCheckDefault').click(() =>{
    
      $('body').toggleClass('darkMode')
        localStorage.setItem('darkMode', 'dark')
       
  })
  
});
