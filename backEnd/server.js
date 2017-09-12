var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  data = {},
  router = express.Router();
app.use(bodyParser.json());


router.route("/").get(function(req,res,next){
  res.send("hello whats up people greenIt challenge");
})

app.use(router);

var server = app.listen(3000, function() {
  console.log('Server Running and Listening on port localhost:%d', server.address().port);
});