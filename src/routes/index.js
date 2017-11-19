var express = require('express');
var router = express.Router();
const DataProvider = require('../data/dataProvider');
const DollsDao = require('../data/dao/dollsDao');

/* GET home page. */
router.get('/', function(req, res, next) {
  const dataProvider = DataProvider.init();

  const dao = new DollsDao(dataProvider);
  dao.getById('1').then(result => {
      res.render('index', { title: JSON.stringify(result) });      
  });

 
});

module.exports = router;
