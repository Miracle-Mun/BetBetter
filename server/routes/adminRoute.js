const express = require('express');
// const jwt = require('jsonwebtoken');
// const ObjectId = require('mongoose').Types.ObjectId;

// const Article = require('../models/articlesModel.js');
const config = require('../config.js');

let router = express.Router();

router.post('/users', (req, res) => {
    var sql = "select * from `user`";

    config.connection.query(sql, function(err, results){    
        if(results&&results.length>0){
            res.json({ users: results });
        }
        else{
            res.json({ status: false, errors: 'no records'});
        }
                
    });
});

router.post('/deluser', (req, res) => {
    console.log(req)
    var sql = "DELETE FROM `user` WHERE id = '"+req.body.id+"'";
    console.log(sql);
    config.connection.query(sql, function(err, results){    
        var sql = "select * from `user`";
        config.connection.query(sql, function(err, results){    
            if(results&&results.length>0){
                res.json({ users: results });
            }
            else{
                res.json({ status: false, errors: 'no records'});
            }            
        });          
    });
});

router.post('/client', (req, res) => {
    console.log(req)
    var sql = "UPDATE `client` SET client_id ='"+ req.body.id+"', password= '"+req.body.secret+"' WHERE id = '0'";
    console.log(sql);
    config.connection.query(sql, function(err, results){    
            res.json({ status: 'true' });            
    });
});


router.post('/getclient', (req, res) => {
    console.log("sdsd")
    var sql = "select * from `client` where id='0'";
    config.connection.query(sql, function(err, results){    
        if(results&&results.length>0){
            res.json({ clientData: results });
        }
        else{
            res.json({ status: false, errors: 'no records'});
        }
                
    });
});

router.post('/payments', (req, res) => {
    var sql = "select * from `payment`";

    config.connection.query(sql, function(err, results){    
        if(results&&results.length>0){
            res.json({ payments: results });
        }
        else{
            res.json({ status: false, errors: 'no records'});
        }
                
    });
});

module.exports = router;
