const express = require('express');
const bodyParser = require('body-parser');

var app =express();
var OAuth = require('oauth');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

var header = {
    "X-Yahoo-App-Id": 'fz7FYm38'
};

var request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9bnJ0MmVwaUZjaWNqJmQ9WVdrOVpubzNSbGx0TXpnbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTg1',
    'dd654082449ae8226c31699167e1bbb325adee4a',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);


app.post('/', (req, res) => {
    const cities = req.body.city;
    request.get(
        `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${cities}&format=json`,
        null,
        null,
        (err, data, result) => {
            if (err) {
                console.log(err);
            }    
            res.send(data);
        }
    );
})

app.listen(4000, () => console.log('Listening on port 4000'));