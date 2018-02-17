const appSettings = require('../../appSettings');
const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router();

router.get("/", function (req, res) {
    fs.readFile(path.join(appSettings.ROOT, "index.html"), 'utf-8', function (err, content) {
        res.send(content)
    })
})

module.exports = router;