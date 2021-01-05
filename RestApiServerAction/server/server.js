const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express()
const port = 3000

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h1>You have reached a valid address (e.g. http://localhost:3000). However, no useful action is defined for this no-parameter get </h1>');
});

app.post('/action', (req, res) => { 
    const actionContent = req.body;
    const file = actionContent.filename
    const content = `${actionContent.action} | ${actionContent.message} | ${file}`
 
    fs.writeFile(file, content, err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })

    res.send(`Action executed: [${content}]`);
});

app.listen(port, () => console.log(`App listening on port ${port}`));