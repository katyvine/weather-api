'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;
const cors = require('cors');
const superagent = require('superagent');

app.use(express.static('./public'));
app.use(cors());


app.get('/alerts/active', (req, res) => {
console.log('Routing a request to API');
const url = `https://api.weather.gov/alerts/active`;
superagent.get(url)
  // .set('UserAgent', 'followthesnow.org')
  .set("Accept", "application/vnd.noaa.dwml+json;version=1")
  .then(data => res.send(data))
  .catch(error => console.log(error));
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
