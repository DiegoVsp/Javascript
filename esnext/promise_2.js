// setTimeout(function() {
//   console.log('Executando callback1...')

//   setTimeout(function() {
//     console.log('Executando Callback2...')

//     setTimeout(() => {
//       console.log('Executando CallBack3...')
//     }, 2000);
//   }, 2000)
// }, 2000)

function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
     setTimeout(() => {
       console.log('Executando promise...')
       resolve()
     }, tempo);
  })
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor())