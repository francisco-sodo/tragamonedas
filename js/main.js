function preEntrega() {
let tiros = 3;
let dinero = 800;
let dineroGanado = 0;

let edad = Number(prompt("Ingrese su edad"));

if (edad >= 18) {
  

  function empezar() {
    for (let i = 3; i > 0; i -= 1) {
      alert("Presione aceptar para tirar. \nTiros restantes: " + tiros);

      let tresTiros = () => {
        let shoot1 = Math.ceil(Math.random() * 3);
        console.log(shoot1);
        let shoot2 = Math.ceil(Math.random() * 3);
        console.log(shoot2);
        let shoot3 = Math.ceil(Math.random() * 3);
        console.log(shoot3);

        console.log("------------");

        if (shoot1 == 1 && shoot2 == 1 && shoot3 == 1) {
          dineroGanado += 100;
          console.log("COINCIDENCIA!\nGANASTE " + dineroGanado + " PESOS");
          
        } else if (shoot1 == 2 && shoot2 == 2 && shoot3 == 2) {
          dineroGanado += 100;
          console.log("COINCIDENCIA!\nGANASTE " + dineroGanado + " PESOS");
          
        } else if (shoot1 == 3 && shoot2 == 3 && shoot3 == 3) {
          dineroGanado += 100;
          console.log("COINCIDENCIA!\nGANASTE " + dineroGanado + " PESOS");
        } else {
          console.log("No hay coincidencia");
        }
      }

      tresTiros();
      tiros -= 1;
    } 
  } 
  
  
} else {
  alert("Tenes " + edad + ". Sos menor de edad, no podes jugar.");
  console.log("Ha salido del juego");
}

  while (dinero >= 100 ){

    empezar();
    tiros = 3;
    dinero -= 100;
    console.log("Ya tiraste los 3 tiros. Te quedan " + dinero + " pesos para jugar")

    if (dinero < 100) {
      console.log("NO HAY MAS DINERO. A VENDER COSAS PARA SEGUIR JUGANDO!")
      break;
    }
    
    let dineroFinal = dinero + dineroGanado;
    let seguir = prompt("CONTINUAR?\nescriba SI o NO ")

    if(seguir.toUpperCase() == "SI"){
      console.log("NUEVA VUELTA. MUCHA SUERTE!")
    }
    else{
      console.log("ABANDONASTE EL JUEGO.\nGANASTE " + dineroGanado + " PESOS.\nTE VAS A CASA CON " + dineroFinal + " pesos");
      break;
    }
  
}

}





  
  

