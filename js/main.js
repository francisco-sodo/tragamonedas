

let tiros = 3;
let dinero = 500;
const coincidencias = 200;
const valorTiro = 100;



// GANASTE ///////////////////////////////////////////////////////
function ganaste() {
  console.log("COINCIDENCIA!\nGANASTE " + coincidencias + " PESOS.");
  dinero += coincidencias
}

// NUMERO RANDOM ///////////////////////////////////////////////////////
function numeroRandom() {
return Math.ceil(Math.random() * 3);
}

// TRES TIROS ///////////////////////////////////////////////////////

function tresTiros() {
  let shoot1 = numeroRandom();
  console.log(shoot1);
  let shoot2 = numeroRandom();
  console.log(shoot2);
  let shoot3 = numeroRandom();
  console.log(shoot3);

  let terna = [shoot1, shoot2, shoot3]
  //console.log(terna)

  console.log("------------");

  if(terna.every(numero => (numero) === terna[0])){
    ganaste();
  }else{console.log("No hay coincidencia");}

} 

//EMPEZAR /////////////////
function empezar() {
  tiros = 3
  for (let i = 3; i > 0; i -= 1) {
    alert("Presione aceptar para tirar.\nTiros restantes: " + tiros)
    tresTiros();
    tiros -= 1;
  }
  dinero -= 100
  console.log("Ya tiraste 3 tiros.")
}

//JUGAR///////////////////////////////////////////////////////////////////
function jugar() {
  
  while (dinero >= 100) {
    empezar();
    if (dinero == 0 ) {
      console.log("NO HAY MAS DINERO. A VENDER COSAS PARA SEGUIR JUGANDO!");
      return;
    }
  

  let saldoFinal = dinero - valorTiro;
  let continuar;

  if(saldoFinal == 0){
    continuar = confirm("ULTIMO TIRO!!!.\nSi sales te vas con " + dinero + " pesos.\nCONTINUAR?");
   }else{continuar = confirm("CONTINUAR?\nSi sales te vas con " + dinero + " pesos.\nSi continuas, te quedaran " + saldoFinal + " pesos para jugar");}


  if (continuar) {
    console.log("NUEVA VUELTA. MUCHA SUERTE!");
    
  } else {
    console.log("ABANDONASTE EL JUEGO.\nTE VAS CON " + dinero + " PESOS.");
    return;
   }
  }
  
}

// VERIFICAR EDAD /////////////////////////////////////////////////////////

function verificarEdad() {
  let edad = Number(prompt("Ingrese su edad"));
  if (edad >= 18) {
    console.log("el juego comienza");
    alert(`- Tu dinero inicial es de ${dinero}.`+`\n- El valor de los tres tiros es de ${valorTiro} pesos`+`\n- Con cada acierto ganas ${coincidencias} pesos.`)
    jugar();
  } else {
    alert(`Tenes ${edad}. Sos menor de edad, no podes jugar.`);
    console.log("Ha salido del juego");
  }
  
}
























/*




let tiros = 3;
let dinero = 400;
//let dineroGanado = 100;
const coincidencias = 200;
const valorTiro = 100;




// GANASTE ///////////////////////////////////////////////////////
function ganaste() {
  console.log("COINCIDENCIA!\nGANASTE " + coincidencias + " PESOS.");
  dinero += coincidencias
  //dineroGanado = dinero;
}

// NUMERO RANDOM ///////////////////////////////////////////////////////
function numeroRandom() {
  let operacion = Math.ceil(Math.random() * 3);
  return operacion;
}

// TRES TIROS ///////////////////////////////////////////////////////
function tresTiros() {
  let shoot1 = numeroRandom();
  console.log(shoot1);
  let shoot2 = numeroRandom();
  console.log(shoot2);
  let shoot3 = numeroRandom();
  console.log(shoot3);

  console.log("------------");

  if (
    (shoot1 == 1 && shoot2 == 1 && shoot3 == 1) ||
    (shoot1 == 2 && shoot2 == 2 && shoot3 == 2) ||
    (shoot1 == 3 && shoot2 == 3 && shoot3 == 3)
  ) {
    ganaste();
   
  } else {
    console.log("No hay coincidencia");
  }
} 

//EMPEZAR /////////////////
function empezar() {
  tiros = 3
  for (let i = 3; i > 0; i -= 1) {
    alert("Presione aceptar para tirar.\nTiros restantes: " + tiros)
    tresTiros();
    tiros -= 1;
  }
  dinero -= 100
  console.log("Ya tiraste 3 tiros.")
}

//JUGAR///////////////////////////////////////////////////////////////////
function jugar() {
  
  while (dinero >= 100) {
    empezar();
    if (dinero == 0 ) {
      console.log("NO HAY MAS DINERO. A VENDER COSAS PARA SEGUIR JUGANDO!");
      return;
    }
    ///////

  let saldo = dinero - valorTiro;

  let continuar = confirm("CONTINUAR?\nSi sales te vas con " + dinero + " pesos.\nSi continuas, te quedaran " + saldo + " pesos para jugar");

  if (continuar) {
    console.log("NUEVA VUELTA. MUCHA SUERTE!");
    
  } else {
    console.log("ABANDONASTE EL JUEGO.\nTE VAS CON " + dinero + " PESOS.");
    return;
   }

  }
  
}

// VERIFICAR EDAD ////////////////////////////////////////////////////////////

function verificarEdad() {
  let edad = Number(prompt("Ingrese su edad"));
  if (edad >= 18) {
    console.log("el juego comienza");
    alert(`Tu dinero inicial es de ${dinero}.`+`\nEl valor de los tres tiros es de ${valorTiro} pesos.`)
    jugar();
  } else {
    alert(`Tenes ${edad}. Sos menor de edad, no podes jugar.`);
    console.log("Ha salido del juego");
  }
  
}

*/