const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const SECRET = 'creativecode'
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())


function verifyJWT(req, res, next){
    const token = req.headers['x-access-token']
    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) return res.status(401).end()
        req.userId = decoded.userId
        next()
    })
}

const UserRoutes = require('./routes/UserRoutes');
app.use('/admin', UserRoutes);

app.post('/login', (req, res) => {
    if(req.body.email === 'sula@teste.com' && req.body.password === '123'){
        const token = jwt.sign({userId: 1}, SECRET, { expiresIn: 300 })
        return res.status(200).json({auth: true, token})
    }

    res.status(401).json("Não foi possível conectar. Verifique o usuário e senha.")
})

app.post('/logout', (req, res) => {
    res.end()
})

app.listen(8081, () => {
    console.log("Servidor Rodando!")
})