const appSettings = require('./appSettings')
const express = require('express')
const path = require('path')

const app = express()

express.static("/public",express.static(path.join((appSettings.ROOT,"public"))))


app.listen(appSettings.PORT);
