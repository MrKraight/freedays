var point = require('../model/point');
var route = require('../model/route');
var last_id = 3;

var krRoute = new route(
    "1",
    "Путь до тропы на правый склон долины Ярлу",
    [new point("Три березы (парковка)","50.08","86.45"),new point("ручей","50.07","86.47"),new point("ночевка","50.02","86.51"),new point("обед","49.97","86.52"), new point("ночевка2","49.94","86.53"),new point("База ЛенАльпТурс","49.92","86.53"), new point("Начало тропы","49.91","86.55")]
    )

var tgRoute = new route(
    "2",
    "Подъём на правый склон долины Ярлу",
    [new point("Вода (озерцо) на подъеме на перевал Ярлу-Боч","49.93","86.58"),new point("Перевал Ярлу-Боч","49.925314","86.61"),new point("Ручей","49.91","86.62"),new point("Ручей2","49.91","86.62"), new point("Перемычка при подъеме на перевал Кара-Айры Южный","49.89","86.65")]
)

var ecoRoute = new route(
    "3",
    "Перевал Кара-Айры Южный - Перевал Титова",
    [new point("Перевал Кара-Айры Южный","49.891","86.66"),new point("Перевал ОКА","48.890","86.67"),new point("ручей3","49.86","86.71"), new point("Перевал Титова","49.83","86.60")]
)

class DbConnect
{
    constructor() 
    {
        this.routes=[krRoute,tgRoute,ecoRoute]
        console.log(ecoRoute)
    }

    AddRoute(name, points) {
        ++last_id;
        var t_points = points.map((p) => new point(p.address,p.coordinateX,p.coordinateY))
        var new_route = new route(String(last_id),name,t_points)
        console.log(new_route)
       this.routes.push(new_route); 
    }

    RemoveRoute(id) {
        this.routes = this.routes.filter((Id) => Id != id)
    }
}

module.exports= DbConnect