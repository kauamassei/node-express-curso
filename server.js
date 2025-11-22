import express, { json } from "express";
import publicRoutes from './routes/public.js'

const app = express();
const port = 3333;

app.use(express.json())

app.use('/', publicRoutes)

app.listen(port, console.log(`Servidor rodando na porta ${port}!🚀`));
