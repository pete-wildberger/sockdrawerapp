var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

//connect to mongoose
// 27017 is default mongo port
mongoose.connect('localhost:/27017/socks');
//sock schema
var sockSchema = new mongoose.Schema({
  color: String,
  material: String,
  height: String,
  holey: Number,
  complete: Boolean,
  howMuchIWantIt: Number

});
//sock model
var sockModel = mongoose.model('sockModel', sockSchema);

router.get('/', function(req, res) {
  console.log('socks get hit');
  //give me all the socksModels
  sockModel.find().then(function(data) {
    res.send(data);
  });

}); //end get
router.post('/', function(req, res) {
  console.log('req:', req.body);
  res.send('tube');
});


module.exports = router;
