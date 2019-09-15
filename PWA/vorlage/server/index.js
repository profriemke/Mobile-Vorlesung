var express = require("express");
var app = express();
var port = 8000;

app.use('/', express.static('public'));

app.listen(port, function() {
    console.log('LV Mobile Medien / Prof. Riemke-Gurzki');
    console.log('Lerneinheit: PWA');
    console.log('Web-Server auf Port '+port);
  });