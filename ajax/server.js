const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// mideware
app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const multer = require('multer')
// armazenamento
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./upload") // segundo parametro é a pasta de destino que quer armazenar o arquivo
  },
  filename: function(req, file, callback) {
    callback(null,`${Date.now()}_${file.originalname}`)
  }
})
const upload = multer({ storage }).single('arquivo')

app.post("/upload", (req, res) =>{
  upload(req,res,err => {
    if(err){
      return res.end('Ocorreu um erro.')
    }
    res.end('Concluido com sucesso.')
  })
})

app.post('/formulario', (req,res) => {
  res.send({
    ...req.body,
    id: 7
  })
}) 

app.get('/parOuImpar', (req, res) => {
  // req.body
  // req.query
  // req.params
  const par = parseInt(req.query.numero) % 2 === 0
  res.send({
    resultado: par? 'par' : 'impar'
  })
})


app.listen(8081, () => console.log('Executando...'))


