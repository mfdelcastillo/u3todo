const express = require('express');
const router = express.Router();
const ToDo = require('../models/ToDo.js');


///////////////////
// Get All ToDos //
///////////////////
router.get('/', (req, res) => {
    ToDo.find({}, (err, foundToDos) => {
        if(!err){
            res.status(200).json(foundToDos)
        } else {
            res.status(400).json(err)
        }
    })
});


// reduce() method allows us to change an object to any data type \\
////////////////
// Table Route//
////////////////
router.get('/table', (req, res) => {
    ToDo.find({}, (err, foundToDos) => {
        if(!err){
            const formattedData = foundToDos.reduce((acc, item) => {
                acc[item.status] = acc[item.status] ? [...acc[item.status], item] : [item]
                return acc
            }, {})
            res.status(200).json(formattedData)
        } else {
            res.status(400).json(err)
        }
    })
});


//////////////////
// Delete Route //
//////////////////
router.get('/:id', (req, res) => {
    ToDo.findByIdAndDelete(req.params.id, (err) => {
        if(!err){
            res.status(200).json({ message: "Deleted that ToDo" })
        } else {
            res.status(400).json(err)
        }
    })
});


//////////////////
// Update Route //
//////////////////
router.put('/:id', (req, res) => {
    const { body } = req
    ToDo.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedToDo) => {
        if(!err){
            res.status(200).json(updatedToDo)
        } else {
            res.status(400).json(err)
        }
    })
});


//////////////////
// Create Route //
//////////////////
router.post('/', (req, res) => {
    const { body } = req
    ToDo.create(body, (err, createdToDo) => {
        if(!err){
            res.status(200).json({ message: "All Good!", createdToDo })
        } else {
            res.status(400).json(err)
        }
    })
});


////////////////
// Show Route //
////////////////
router.get('/:id', (req, res) => {
    ToDo.findById(req.params.id, (err, foundToDo) => {
        if(!err){
            res.status(200).json(foundToDo)
        } else {
            res.status(400).json(err)
        }
    })
});

module.exports = router;