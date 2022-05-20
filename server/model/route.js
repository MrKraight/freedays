/* eslint-disable */
var point = require('./point');

class Route{
    constructor(id,name, points) 
    {
        this.id = id,
        this.name = name,
        this.points = points
    }
}

module.exports = Route;