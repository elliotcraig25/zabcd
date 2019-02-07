const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const ctrl = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((db)=>{
    app.set('db', db)
}).catch((err)=>{console.log(err)})

app.post(`/api/getza`, ctrl.getZA)
app.post(`/api/getzb`, ctrl.getZB)
app.post(`/api/getzc`, ctrl.getZC)
app.post(`/api/getzd`, ctrl.getZD)

app.post(`/api/does_z_id_exist`, ctrl.doesZIDExist)

serverPort = process.env.SERVER_PORT || 4000
app.listen(serverPort, ()=>{console.log(`listening on the port ${serverPort}`)})