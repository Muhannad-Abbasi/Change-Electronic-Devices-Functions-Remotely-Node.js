const { app } = require('./core');

app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
})

/* CODE YOUR API HERE */


// Importera all router som finns i routers filen

const acBedroomRouter = require('./routes/acBedroomRouter')
const blindLivingroomRouter = require('./routes/blindLivingroomRouter')
const lightRouter = require('./routes/lightRouter')
const cameraFrontdoorRouter = require('./routes/cameraFrontdoorRouter')
const lockFrontdoorRouter = require('./routes/lockFrontdoorRouter')
const vacuumRouter = require('./routes/vacuumRouter')
const speakerLivingroomRouter = require('./routes/speakerLivingroomRouter')


// Här använder vi alla router som vi redan importerat
// Vi lägger resurser till alla router för att kunna nå dem sen

app.use('/acbedroom', acBedroomRouter)
app.use('/blindlivingroom', blindLivingroomRouter)
app.use('/lights', lightRouter)
app.use('/camerafrontdoor', cameraFrontdoorRouter)
app.use('/lockfrontdoor', lockFrontdoorRouter)
app.use('/vacuum', vacuumRouter)
app.use('/speakerlivingroom', speakerLivingroomRouter)


// Om man ange ett fel path så hamnar i 404 sidan

app.get('*', (req, res) => {
    res.status(404).sendFile('404.html', {root: __dirname + '/404 page'})
})