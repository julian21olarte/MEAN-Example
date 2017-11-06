var express = require('express');
var router = express.Router();

/* Render partials views for use in ng-view directive for Angularjs. */
function partials(req, res, next) {
  var name = req.params.name;
  console.log('name: '+name);
	res.render('partials/'+name, { title: name });
};

module.exports = partials;
