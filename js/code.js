
// Ponemos  el arreglo con las palabras con la cual queremos jugar//
const palabras = ["carro", "murcielago","bicentenario","jovenes", "juego","certus"]

// Designamos que palabra se usará al azar///
const palabra = palabras[Math.floor(Math.random()*palabras.length)];
  
//Creamos los guiones en funcion de la cantidad de letras y contadores de fallos//
let guiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0;
let intentos = 5;

//Encontramos esta función en  "replaceAT" para que separe los caracteres y reemplazar los guines en la posición deseada 
// y vuelve a unir las cadenas
String.prototype.replaceAt = function (index, character) {
    return this.substring(0, index) + character + this.substring(index + character.length);
} 

//Usamos la iteracón for para que evalue cada letra y se use la función replaceAt en donde se deba reemplazar la letra correspondiente
document.querySelector('#calcular').addEventListener('click', () => {
     const letra = document.querySelector('#letra').value; 
     let haFallado = true;
     for (const i in palabra){
        if(letra == palabra[i]){
            console.log(guiones);
            guiones = guiones.replaceAt(i*2, letra);
            haFallado = false;
        }
     }//Creamos un contador de fallos para que al fallar 5 veces se termine el juego y reproduzca una pantalla con perdida//
     if(haFallado){
        intentos--;
        contadorFallos++;
        document.querySelector('#ahorcado').style.
        backgroundPosition = - (120*contadorFallos) + 'px 0';
        
        if(contadorFallos == 5){
            document.querySelector('#ahorcado').style.backgroundPosition =0+'px';
            const palabra = palabras[Math.floor(Math.random()*palabras.length)];
            guiones = palabra.replace(/./g, "_ ");  
            contadorFallos = 0;
            intentos = 5; 
            document.querySelector('#perdedor').style.display = 'flex';
        }// Si ya no hay guiones, entonces se reproduce la pantalla completa con el mensaje de VICTORIA//
     } else{    
        if(guiones.indexOf('_') < 0){
            document.querySelector('#ganador').style.display = 'flex';
        }
     }
     //Ultimos detalles para que luego de poner la letra se reinicie el espacio y el contador de errores//
     document.querySelector('#output').innerHTML = guiones;
     document.querySelector('#letra').value = '';
     document.querySelector('#letra').focus = '';
     document.querySelector('#contador').innerHTML = "Le quedan " +intentos +" vidas";
}); 





///////Evaluando funciones//
// a = Math.random()
// document.write(a)
// document.write("<br>" + Math.floor(a))