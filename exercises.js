import express, { json } from "express";
import { randomUUID } from "node:crypto";

const app = express();
const port = 3333;

app.use(express.json());

const produtos = [];

app.get("/", (req, res) => {
  res.send("Olá mundo");
});

app.get("/status", (req, res) => {
  res.json({ status: "ok", servidor: "online" });
});

app.get("/users/:nome", (req, res) => {
  const nome = req.params.nome; //armazenando o parametro na variavel nome
  res.send(`Olá, ${nome}}`);
});

app.get("/soma", (req, res) => {
  const { a, b } = req.query; // desestruturando as variaveis que vou receber na query

  const numA = Number(a); // convertendo para numero
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ erro: "Os parâmetros precisam ser números" }); //validacao
  }

  const result = numA + numB;

  res.status(200).json({ resultado: result });
});

app.post("/produtos", (req, res) => {
  const { nome, preco } = req.body; // traz os conteúdos e propriedas do 'corpo' da requisicao
  const productId = randomUUID();

  if (!productId || !nome || !preco) {
    return res.status(400).json({ erro: "Envie 'nome' e 'preco'" }); // validacao se há ou não o preco e o nome inseridos
  }

  produtos.push({ productId, nome, preco });

  res.status(201).json({ mensagem: "Produto criado" });
});

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const product = produtos.find((p) => p.productId === id); // pega um unico produto e compara o seu id com o da url

  if (!product) {
    return res.status(404).json({ erro: "Produto não encontrado" }); 
  }
  res.json(product);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
