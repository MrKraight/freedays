const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { allowedNodeEnvironmentFlags } = require('process')
const fileUpload = require("express-fileupload");

const app = express()

app.use(fileUpload());
app.use(bodyParser.json())
app.use(cors())

const routes = require('./routes/api/routes');

app.use('/api/routes', routes);

const port = 5000

app.listen(port, () => console.log('Server started at 5000'))
