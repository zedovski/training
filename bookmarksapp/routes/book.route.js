var express = require('express');
var router = express.Router();

var Book = require('../models').Book;


router.get("/", function(req,res){
  Book.findAll()
      .then(function (books) {
        res.status(200).json(books);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
});

router.get("/:id", function(req,res){
  res.send("Something received 2");
});

router.post("/", function(req,res){
  Book.create(req.body)
      .then(function (newBook) {
        res.status(200).json(newBook);
    })
      .catch(function (error){
        res.status(500).json(error);
      });
  //res.send("Something received");
});

router.put("/", function(req,res){
  res.send("Something received");
});

router.delete("/", function(req,res){
  res.send("Something received");
});

module.exports=router;
