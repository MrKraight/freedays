const express = require('express')
const router = express.Router()

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
module.exports = router