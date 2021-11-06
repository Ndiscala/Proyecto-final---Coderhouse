
const StockDePlantas = [
  {id:1, tipo:"Suculenta" ,especie:"Arbol de jade" ,tamaño:"pequeño" ,precio:100 },
  {id:2, tipo:"Suculenta" ,especie:"Echeveria" ,tamaño:"mediano" ,precio:200 },
  {id:3, tipo:"Suculenta" ,especie:"Sedum" ,tamaño:"mediano" ,precio:200 },
  {id:1, tipo:"Suculenta" ,especie:"Aloe Vera" ,tamaño:"mediano" ,precio:250 },
  {id:1, tipo:"Suculenta" ,especie:"Peperomia" ,tamaño:"grande" ,precio:500 },
  {id:1, tipo:"Suculenta" ,especie:"Corona" ,tamaño:"grande" ,precio:500 },
  {id:7, tipo:"Suculenta" ,especie:"Aloe Juvenna" ,tamaño:"grande" ,precio:550 },
  {id:8, tipo:"Suculenta" ,especie:"Nopal" ,tamaño:"grande" ,precio:600 },
  {id:9, tipo:"Cactus" ,especie:"Cresta" ,tamaño:"pequeño" ,precio:200 },
  {id:10, tipo:"Cactus" ,especie:"Columnar" ,tamaño:"mediano" ,precio:300 },
  {id:11, tipo:"Cactus" ,especie:"Navidad" ,tamaño:"mediano" ,precio:340 },
  {id:12, tipo:"Cactus" ,especie:"Bonete" ,tamaño:"grande" ,precio:420 },
  {id:13, tipo:"Cactus" ,especie:"Campero" ,tamaño:"grande" ,precio:600 },
];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)};
guardarLocal("StockDePlantas", JSON.stringify(productos));



class Plantas {
  constructor (tipo,especie){
    this.id = id;  
    this.tipo = tipo;
    this.tamaño = tamaño;
    this.especie = especie;
    this.precio = parseFloat(precio);
    this.disponible = true;
    return Id;
  }
}

do {
    var comprobar = prompt("Ingrese nombre del producto ó escriba fin para terminar de agregar.");
      if (comprobar === "fin" || comprobar === "FIN" || comprobar === "Fin"){
      break;
      }else{
        Plantax = comprobar;
        var tipox = prompt("Ingrese el tipo de planta");
        var tamañox = prompt("Ingrese tamaño de la planta");
        var especiex = prompt("Ingrese la especie de la planta");
        var preciox = parseFloat(prompt("Ingrese precio de la planta"));
        StockDePlantas.push(new Plantas(Plantax,tipox,tamañox,especiex,preciox));
      }
}
while(comprobar != "fin" || comprobar != "FIN" || comprobar != "Fin")

console.log(StockDePlantas);



let StockActivo = ["Suculentas","Cactus","Arboles","Helechos","Algas"]

for(const planta of StockActivo) {
    let h2 = document.createElement("h2");
    h2.innerText = planta;
    document.body.appendChild(h2);
}

//ELIMINAR TABLA
let tabla = document.getElementById("table");
tabla.parentNode.removeChild(tabla);

//AGREG. VALOR DEL INPUT
document.getElementById("stock").value= StockDePlantas.length;


//INSERTANDO TABLA.
// let tabla = document.createElement("table");
// let tablaBody = document.createElement("tbody");

// for(const planta of StockDePlantas){
//   let fila = document.createElement("tr");
//   fila.innerHTML= `<td> ${planta.id}</td>
//     <td> ${planta.tipo}</td>
//     <td> ${planta.tamaño}</td>
//     <td> ${planta.especie}</td>
//     <td> ${planta.precio}</td>`
//   tablaBody.appendChild(fila);
// }

// tabla.appendChild(tablaBody);
// document.getElementById("tabla1").appendChild(tabla);

let boton = document.getElementById("btn-card")
boton.addEventListener("click", interactuar);

function interactuar (){
  let nombre = prompt("Ingresa tu nombre");
  let fecha = new Date();
  alert("Hola "+ nombre + "Hoy es día " + fecha);
}
















// EVENTOS











