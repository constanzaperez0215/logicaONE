let numeroSecreto
let intentos

function condicionesIniciales () {
  // Textos incertados en el html
  insertarTextoElemento('h1', 'Juego del número secreto!!')
  insertarTextoElemento('p', 'Ingresa un número del 1 al 10')
  numeroSecreto = generarElNumeroSecreto()
  intentos = 1
  console.log(numeroSecreto)
}
condicionesIniciales()


// Inserta textos en el html
function insertarTextoElemento (elemento, texto) {
  const elementoHTML = document.querySelector(elemento)
  elementoHTML.innerHTML = texto
}


// Generador de números random
function generarElNumeroSecreto () {
  return Math.floor(Math.random()*10)
}


function verificarIntento () {
  // Recupera el valor del input y verifica que el valor ingresado sea un número
  const numeroUsuario = parseInt(document.getElementById('numeroUsuario').value)

// Verifica si el número secreto con el número del usuario son iguales
  if (numeroUsuario === numeroSecreto) {
    insertarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`)
    document.querySelector('#reiniciar').removeAttribute('disabled')
  } else {
    (numeroUsuario > numeroSecreto) ? insertarTextoElemento('p','El número es menor') : insertarTextoElemento('p','el numero secreto es mayor')
  }

  intentos++
  vaciarInput()
}


function vaciarInput () {
  let inputEnBlanco = document.querySelector('#numeroUsuario')
  inputEnBlanco.value = ''
}


function reuniciarJuego () {
  // limpiar caja
  vaciarInput()

  // reinicia todas las conficiones iniciales
  condicionesIniciales()

  // deshabilitar el btn reiniciar
  document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}