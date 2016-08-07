var express = require('express');
	report = express.Router();
    json = require('express-json');
    client = require('./config/pg.js');


report.get("/getDataTable", function(req, res) {
	var jsonStringify, data;
	client.query('SELECT * FROM app_kanban.rpt_inicio_fin()', function(err, result){
		if (err) {
			console.log(err);
			res.status(500);
			return;
		}else{
			jsonStringify = JSON.stringify(result.rows);
	      	data = JSON.parse(jsonStringify)
	     	res.jsonp(data);
		}
	});
});

module.exports = report;