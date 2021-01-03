// https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const sayHi = (req, res) => {
  res.send("<h1>Confirmation we are sending stuff.</h1>");
};

app.get("/", sayHi);

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send(`The sum is: ${a + b}`);
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});

