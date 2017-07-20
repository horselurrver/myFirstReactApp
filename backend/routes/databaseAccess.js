const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js');

router.post('/add', function(req, res) {
  const testTodo = new TodoItem({
    taskText: req.body.task,
  });
  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    });
});

router.get('/all', function(req, res) {
  TodoItem.find({})
    .exec(function(err, items) {
      if (err) {
        console.log(err);
      } else {
        res.json(items);
      }
    })
});

router.post('/toggle', function(req, res) {
  var id = req.body.id;
  TodoItem.findOne({_id:id})
    .exec(function(err, item) {
      if (err) {
        res.send(err);
      } else {
        item.completed = !item.completed;
        item.save();
        res.sendStatus(200);
      }
    });
});

router.post('/remove', function(req, res) {
  var id = req.body.id;
  TodoItem.findOne({_id:id})
    .exec(function(err, item) {
      if (err) {
        res.send(err);
      } else {
        item.remove();
        res.sendStatus(200);
      }
    })

});


module.exports = router;
