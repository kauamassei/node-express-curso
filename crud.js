// import express from "express";
// import { randomUUID } from "node:crypto";

// const app = express();
// const port = 3334;

// app.use(express.json());

// const users = [];

// app.get("/usuarios", (req, res) => {
//   res.json(users);
// });

// app.get("/usuarios/:id", (req, res) => {
//   const { id } = req.params;
//   const user = users.find((u) => u.userId === id);

//   if (!user) {
//     return res.status(404).json({ erro: "Usuário não encontrado" });
//   }

//   res.json(user);
// });

// app.post("/usuarios", (req, res) => {
//   const { nome, email, idade } = req.body;
//   const userId = randomUUID();

//   if (!nome || !email || !idade || !userId) {
//     return res.status(`Envie nome, email e idade`);
//   }

//   users.push({ userId, nome, email, idade });
//   res.status(201).json({ mensagem: "Usuário criado!" });
// });

// app.put("/usuarios/:id", (req, res) => {
//   const { id } = req.params;
//   const { nome, email, idade } = req.body;
//   const userIndex = users.findIndex((f) => f.userId === id);

//   if (userIndex === -1) {
//     return res.status(404).json({ erro: "Usuário não encontrado" });
//   }

//   users[userIndex] = {
//     ...users[userIndex],
//     nome: nome ?? users[userIndex].nome,
//     email: email ?? users[userIndex].email,
//     idade: idade ?? users[userIndex].idade,
//   };

//   return res.json({
//     mensagem: "Usuário atualizado!",
//     usuario: users[userIndex],
//   });
// });

// app.delete("/usuarios/:id", (req, res) => {
//   const { id } = req.params;
//   const user = users.find((u) => u.userId === id);

//   if (!user) {
//     return res.status(404).json({ erro: "Usuário não encontrado" });
//   }

//   users.splice(user, 1);
//   return res.status(204).send("Usuário deletado");
// });

// app.listen(port, () => {
//   console.log(`Servidor rodando na porta: ${port}`);
// });

