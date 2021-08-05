const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./routes/index.routes');
const db = require('./db/models');
const PORT = 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Welcome to AUGMONT MERCHANT', success: true });
});

app.use('/api/v1', router);

app.use((_, res) => {
  return res
    .status(404)
    .send({ message: 'Endpoint Not found ', success: false });
});

(async ()=>{
  await require('./db/index')()
  await app.listen(PORT, () => console.log(`Listening on ::${PORT}`));
})()