let numeroSecreto
let intentos
let listaNumerosSorteados = []
let numeroMaximo = 10

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
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1

  console.log(numeroGenerado)
  console.log(listaNumerosSorteados)

  if (listaNumerosSorteados.length == numeroMaximo) {
    insertarTextoElemento('p', 'Ya realizaste todos los intentos')
  } else {
      // si el numero generado está incluido en la lista, se vuelve a llamar a si misma para poder generar un nuevo número secreto.
    // Se realiza con la finalidad de que los número sorteados no se repitan
      if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarElNumeroSecreto()
      } else {
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado
      }
  }
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
