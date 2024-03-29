var express = require('express');
var path = require('path');

var app = express();
var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server running on port ' + port);
});
