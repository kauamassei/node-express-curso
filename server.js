import express, { json } from "express";
import publicRoutes from "./routes/public.js";
import privateRoutes from "./routes/private.js";

import auth from './middlewares/auth.js'

const app = express();
const port = 3333;

app.use(express.json());

app.use("/", publicRoutes);
app.use("/", auth, privateRoutes);

app.listen(port, console.log(`Servidor rodando na porta ${port}!🚀`));
