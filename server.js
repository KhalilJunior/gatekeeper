var { config, app } = require('./index');

var port = process.env.PORT || config.port || 8000;

app.listen(port, null, function (err) {
  console.log('Gatekeeper, at your service: http://localhost:' + port);
});
