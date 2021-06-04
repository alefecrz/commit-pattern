const express = require('express');
const { response, json } = require('express');

const app = express();
const PORT = 3334;

app.get('/', (require, response) => response.json({ message: 'Hello World!' }));

app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
});
