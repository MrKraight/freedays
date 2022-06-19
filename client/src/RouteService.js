import axios from 'axios'

const routeUrl = 'http://localhost:5000/api/routes/';
const trackUrl = 'http://localhost:5000/api/routes/tracks/'

class RouteService {

    static getRoutes() {
        return new Promise( (resolve, reject) => {
            try {
                axios.get(routeUrl).then((data) => {resolve(data);})
            }
            catch(err) {
                reject(err);
            }
        })
    }

    static insertRoute(name, points) {
        try {
            axios.post(routeUrl, {
                name,
                points
            });
        }
        catch(err) {
            console.log(err);
        }
    }

    static sendTrack(fomrVals){
        return new Promise( (resolve, reject) => {
            try {
                axios.post(trackUrl, 
                fomrVals,    {headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then(data=> {resolve(data);});
            }
            catch(err) {
                reject(err);
            }
        });
    }

    static getTrack(){
        return new Promise( (resolve, reject) => {
            try {
                axios.get(trackUrl).then((data) => {resolve(data);})
            }
            catch(err) {
                reject(err);
            }
        })
    }

    static deleteRoute(id) {
        return axios.delete(`${routeUrl}${id}`);
    }

}

export default RouteService