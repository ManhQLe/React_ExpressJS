const appSettings = require('./appSettings')
const express = require('express')
const path = require('path')
const feRoute = require('./server/routes/frontEndRouter')

const app = express()

app.use("/public",express.static(path.join(appSettings.ROOT,"public")))
app.use(feRoute)

app.listen(appSettings.PORT);
