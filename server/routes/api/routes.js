const express = require('express')
const router = express.Router()
const fs = require("fs");
let gpxParser = require('gpxparser');

//далее под маршрутом (route) подразумевается маршрут предметной области
const Data = require('../../data/dataset');
var start_data = new Data();
//Получить маршрут 
router.get('/',(req,res) => {
    res.send(start_data.routes)
});
//Добавить маршрут
router.post('/', (req, res) => {
    if(req._body)
    {
    start_data.AddRoute(req.body.name, req.body.points)
    }
})
//Удалить маршрут
router.delete('/:id', (req,res) => {
    start_data.RemoveRoute(id);
})

router.get('/tracks',(req,res) => {
    res.send("прив")
});
//Добавить трек
router.post('/tracks', (req, res) => {
    if(req.files){
        console.log("track recieved");
        const buffer = req.files.file.data;
        var gpx = new gpxParser();
        gpx.parse(buffer.toString());
        var points = gpx.tracks[0].points.map(el => [el.lat, el.lon]);
        console.log(points);
        res.status('200');
        res.send(points);
    }
})
module.exports = router