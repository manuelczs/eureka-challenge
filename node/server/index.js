const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 5000;

app.use(cors());
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Listening');
})

app.use('/local', routes());

app.listen(port, () => {
    console.log('Port listening...');
});