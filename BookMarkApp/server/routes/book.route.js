var express = require('express');
var router = express.Router();
var Book = require('../models').Book;

router.get("/",function(req,res){
    //res.send("Inside get function");
    Book.findAll()
      .then(function (books) {
        res.status(200).json(books);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
});

router.post("/",function(req,res){
    //res.send("Inside post function");
    Book.create(req.body)
      .then(function (newBook) {
        res.status(200).json(newBook);
    })
      .catch(function (error){
        res.status(500).json(error);
      });
 
    
});


router.put("/",function(req,res){
    //res.send("Inside put function");
    Book.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedRecords) {
      res.status(200).json(updatedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
    
});

router.delete("/",function(req,res){
    res.send("Inside delete function");
    
});


router.get("/:id",function(req,res){

    res.send("Inside get bookid function");
})
module.exports = router;