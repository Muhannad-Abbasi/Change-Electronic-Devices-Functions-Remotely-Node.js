const { Router } = require('express');
const router = new Router();
const { db, update } = require('../db/index');

// Här menar vi 'http://localhost:3000/lights/:id/on'

router.get('/:id/on', (req, res) => {
    let id= req.params.id;
    db
    .get('devices')
    .find({ id : id }) // Leta reda på en viss ID - det som står efter kolon återfinns i req.params
    .assign({ on : true }) // Slå på enheten
    .value();
    update();

    res.send(`Light with ID ( ${id} ) is on!`)
})

// Här menar vi 'http://localhost:3000/lights/:id/off'

router.get('/:id/off', (req, res) => {
    let id= req.params.id;
    db
    .get('devices')
    .find({ id : id })
    .assign({ on : false }) // Slå av enheten
    .value();
    update(); // berätta till frontend att uppdatera state

    res.send(`Light with ID ( ${id} ) is off!`)
})

module.exports = router; // Exportera router till vår main fil ( index.js )