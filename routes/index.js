var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res)=> {
  /*const number = req.body.number;
  const result = Math.pow(parseFloat(number),2);
  res.render('index', { title: 'Express', number, result });*/

  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const opt = req.body.operator;
  var result = 0;

  if(opt == 'sum')
  {
    result=num1+num2;
    var sumchecked = 'checked';
    res.render('index', {num1, num2,sumchecked, result });
  }
  else if(opt == 'sub')
  {
    result=num1-num2;
    var subchecked = 'checked';
    res.render('index', {num1, num2,subchecked, result });
  }
  else if(opt == 'mul')
  {
    result=num1*num2;
    var mulchecked = 'checked';
    res.render('index', {num1, num2,mulchecked, result });
  }
  else if(opt == 'div')
  {
    result=num1/num2;
    var divchecked = 'checked';
    res.render('index', {num1, num2,divchecked, result });
  }

});

module.exports = router;
