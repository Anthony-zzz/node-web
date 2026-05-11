const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

const emails = [];

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/cadastro", (req, res) => {
  const email = req.body.email;

  emails.push(email);

  res.redirect(`/sucesso?email=${email}`);
});

app.get("/sucesso", (req, res) => {
  const email = req.query.email;

  res.render("success", { email });
});

app.get("/emails", (req, res) => {
  res.render("emails", { emails });
});

app.post("/deletar/:id", (req, res) => {
  const id = req.params.id;

  emails.splice(id, 1);

  res.redirect("/emails");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});