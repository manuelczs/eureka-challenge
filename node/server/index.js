const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();
const port = 5000;

app.use(cors());
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('Listening');
})

app.use('/local', routes());

app.listen(port, () => {
    console.log('Port listening...');
});