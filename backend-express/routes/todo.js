var express = require('express');
var router = express.Router();

var todoCollection = require('../models/todo')


router.route('/')
    .delete(removeTodo)
    .get(getTodos)
    .post(addTodo)
    .put(updateTodo);

module.exports = router;


function addTodo(req, res, next){
    console.log('addtodo',req.body)
    if(req.body){
        let todo = new todoCollection({
            desc: req.body.desc,
            date: req.body.date
        });
        todo.save(function(err, saved){
            if(err) return res.status(500).send(err);
            res.json({result:saved,"success":true});
        });
    }
}
function removeTodo(req, res, next){
        todoCollection.findByIdAndRemove(req.query._id).exec(function(err, saved){
            if(err) return res.status(500).send(err);
            res.json(saved);
        });
}

function getTodos(req, res, next){
    console.log('called get')

        todoCollection.find().exec(function(err, saved){
            if(err) return res.status(500).send(err);
            res.json({data:saved,success:true});
        });
}

function updateTodo(req, res){

}
