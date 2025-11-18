import express, { json } from 'express'

const app = express()
const port = 3333

app.get('/', (req, res) => {
    res.send('Olá mundo')
})

app.get('/status', (req, res) => {
    res.json({"status": "ok", "servidor": "online"})
})

app.get('/users/:nome', (req, res) => {
    const nome = req.params.nome
    res.send(`Olá, ${nome}}`)
})

app.get('/soma', (req, res) => {
    const {a, b} = req.query

    const numA = Number(a)
    const numB = Number(b)

    if(isNaN(numA) || isNaN (numB)){
        return res.status(400).json({erro: 'Os parâmetros precisam ser números'})
    }

    const result = numA + numB

    res.status(200).json({'resultado': result })
    
})



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
