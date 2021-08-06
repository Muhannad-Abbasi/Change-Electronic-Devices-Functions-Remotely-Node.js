const { Router } = require('express');
const router = new Router();
const { db, update } = require('../db/index');

// Här menar vi 'http://localhost:3000/lockfrontdoor/LOC1/lock'

router.get('/:id/lock', (req, res) => {
    let id= req.params.id;
    db
    .get('devices')
    .find({ id : id })
    .assign({ locked : true }) // låsa dörren
    .value();
    update();

    res.send(`Front door is locked!`)
})

// Här menar vi 'http://localhost:3000/lockfrontdoor/LOC1/unlock'

router.get('/:id/unlock', (req, res) => {
    let id= req.params.id;
    db
    .get('devices')
    .find({ id : id })
    .assign({ locked : false }) // låsa upp dörren
    .value();
    update(); // berätta till frontend att uppdatera state

    res.send(`Front door is unlocked!`)
})

module.exports = router; // Exportera router till vår main fil ( index.js )