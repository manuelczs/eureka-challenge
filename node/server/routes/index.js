const express = require('express');
const fetch = require('node-fetch');
const routes = express.Router;
const app = express();

app.use('/', routes());
const API_KEY = 'X86NOH6II01P7R24';

module.exports = () => {

    app.get('/getdata/:symbol', (req, res) => {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${req.params.symbol}&apikey=${API_KEY}`)
            .then(res => res.json(res))
            .then(json => res.json(json))
    })

    return app;
}