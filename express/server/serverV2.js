const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = '5000';

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/indexV2.html"));
});

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send({
    result: parseInt(a) + parseInt(b)
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ` + port + `. Example call: [http://localhost:` + port + `]`);
});
