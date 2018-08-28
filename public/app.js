'use strict'


$.get('/alerts/active')

.then (data => $('#results').append(`<h4>${JSON.stringify(JSON.parse(data.text).features[1].properties.event)}<h4>`))
.catch(error => console.log(error.message));
