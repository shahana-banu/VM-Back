var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Trainer = require('./trainer');

router.get('/:id?',function(req,res,next){
 
    if(req.params.id){
     
    Task.getTrainerById(req.params.id,function(err,rows){
     
    if(err)
      {
      res.json(err);
      }
      else{
      res.json(rows);
      }
      });
     }
     else{
     
    Task.getAlltrainer(function(err,rows){
     
    if(err)
      {
      res.json(err);
      }
      else
      {
      res.json(rows);
      }
     
     });
     }
     });
     router.post('/',function(req,res,next){
     
    Task.createTrainer(req.body,function(err,count){
      if(err)
      {
      res.json(err);
      }
      else{
      res.json(req.body);//or return count for 1 &amp;amp;amp; 0
      }
      });
    });

    module.exports=router;