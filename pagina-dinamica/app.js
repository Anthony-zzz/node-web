const express=require('express')
const path=require('node:path')

const app=express()

// Define o EJS como template engine
app.set('view engine','ejs')

// Define a pasta onde ficam os arquivos EJS
app.set('views',path.join(__dirname,'views'))

// Rota principal
app.get('/', (req,res) => {
const title='Homepage'
const message='Mensagem dinâmica inserida pelo EJS.'

// Renderiza o arquivo index.ejs passando dados
res.render('index', { title, message })
})

const PORT=3000

app.listen(PORT, () => {
console.log('Servidor iniciado!')
})