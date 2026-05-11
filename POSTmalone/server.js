app.get('/formulario', (req,res) => {
res.render('form')
})
app.use(express.urlencoded({ extended:true }))

app.post('/register', (req,res) => {
const username=req.body.username
const password=req.body.password

console.log(username)
})

conststoredUsers= []

app.post('/register', (req,res) => {
const username=req.body.username
const password=req.body.password

storedUsers.push({ username, password })

res.redirect('/usuarios')
})

app.get('/usuarios', (req,res) => {
res.render('users', { users:storedUsers })
})