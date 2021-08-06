const { Router } = require('express');
const router = new Router();
const { db, update } = require('../db/index');

// Här menar vi 'http://localhost:3000/speakerlivingroom/SPE1/on'

router.get('/:id/on', (req, res) => {
    let id= req.params.id;
    console.log(id)
    db
    .get('devices')
    .find({ id : id }) // Leta reda på en viss ID - det som står efter kolon återfinns i req.params
    .assign({ on : true }) // Slå på enheten
    .value();
    update();

    res.send(`Speaker is on!`)
})

// Här menar vi 'http://localhost:3000/speakerlivingroom/SPE1/off'

router.get('/:id/off', (req, res) => {
    let id= req.params.id;
    db
    .get('devices')
    .find({ id : id })
    .assign({ on : false }) // Slå av enheten
    .value();
    update(); // berätta till frontend att uppdatera state

    res.send('Speaker is on!')
})


module.exports = router; // Exportera router till vår main fil ( index.js )