var express = require('express');
var app = express();

app.get('*', function(request, response) {
  response.end("Reap the snakes - "+request.path.slice(1));
});

app.listen(3000);
console.log('Listening on 3000');
