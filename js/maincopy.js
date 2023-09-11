/*
Mediante un prompt pedir la edad del usuario. Si es menor a 18 mostrar por un alert que no puede jugar. Si es mayor a 18 entrar al juego. El usuario debera escribir la palabra PLAY para arrancar. Si queire salir debera escribir EXIT.


Generar de manera ramdom y al mismo tiempo  3 numeros del 1 al 3.
Asociar cada numero a un animal y mostrar el animal por consola. 
1 = perro
2 = gato
3 = loro

Si en 7 vueltas no hubo ningun match, se pierde. Si hay match antes de las 5 vueltas, se gana.
*/

//const PLAY = "P";
// const EXIT = "EXIT";
// const UNO = 1;
// const DOS = 2;
// const TRES = 3;



/*
let startPlay = () => { 
    for(let i=0; i<3;i++){
        // console.log(Math.ceil(Math.random()*3))};
        let shoot = Math.ceil(Math.random()*3);
        console.log(shoot);
        if(shoot === 3 || shoot === 2 || shoot === 1) {
            console.log("GANASTE")
        } else{
            start = prompt("Presione la tecla P para comenzar. Si desea salir escriba EXIT").toUpperCase();
        }
        }}
        */


let tiros = 3;
let dinero = 1000;

let edad = Number(prompt("Ingrese su edad"))
  if(edad >= 18){
    
    //entrar a jugar bucle for

    for(let i=3; i > 0; i -=1){
    alert("Presione aceptar para tirar. \nTiros restantes: " + tiros);

    let startPlay = () => {
      let shoot1 = Math.ceil(Math.random() * 3);
      console.log(shoot1);
      let shoot2 = Math.ceil(Math.random() * 3);
      console.log(shoot2);
      let shoot3 = Math.ceil(Math.random() * 3);
      console.log(shoot3);
    
      console.log("------------");
    
      if (shoot1 == 1 && shoot2 == 1 && shoot3 == 1) {
        console.log("GANASTE");
      } else if (shoot1 == 2 && shoot2 == 2 && shoot3 == 2) {
        console.log("GANASTE");
      } else if (shoot1 == 3 && shoot2 == 3 && shoot3 == 3) {
        console.log("GANASTE");
      } else {
        console.log("No hay coincidencia");
      }
    }
    startPlay();

    tiros -=1;
  
  } //fin del bucle for
  console.log("te quedaste sin credito")
  dinero =-100;



  } else{
    alert("Tenes " + edad + ". Sos menor de edad, no podes jugar.");
    console.log("Ha salido del juego")
  }




// function start() {
//   prompt("Presione la tecla P para tirar").toUpperCase();
  
// }

// let startPlay = () => {
//   let shoot1 = Math.ceil(Math.random() * 3);
//   console.log(shoot1);
//   let shoot2 = Math.ceil(Math.random() * 3);
//   console.log(shoot2);
//   let shoot3 = Math.ceil(Math.random() * 3);
//   console.log(shoot3);

//   console.log("------------");

//   if (shoot1 == 1 && shoot2 == 1 && shoot3 == 1) {
//     console.log("GANASTE");
//   } else if (shoot1 == 2 && shoot2 == 2 && shoot3 == 2) {
//     console.log("GANASTE");
//   } else if (shoot1 == 3 && shoot2 == 3 && shoot3 == 3) {
//     console.log("GANASTE");
//   } else {
//     console.log("No hay coincidencia");
//   }
// }
// startPlay();


// const INGRESO = Number(prompt("Por favor, ingrese su edad"));
// if (INGRESO >= 18) {
//   start();

//   if (PLAY) {
//     // for(let i=0; i<3;i++){
//     startPlay();
//     console.log("--------");
//     //}
//   } else {
//     alert("Usted ha elegido salir");
//     console.log("Ha salido del juego");
//   }
// } else {
//   alert("Imberbe, sos menor de edad. No podes jugar.");
//   console.log("Ha salido del juego");
// }
