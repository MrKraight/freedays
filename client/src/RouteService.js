import axios from 'axios'

const url = 'http://localhost:5000/api/routes/'

class RouteService {

    static getRoutes() {
       // const res = axios.get(url)
       // console.log(res)
        //return res;
        return new Promise( (resolve, reject) => {
            try {
                axios.get(url).then((data) => {resolve(data);})
            }
            catch(err) {
                reject(err);
            }
        })
    }

    static insertRoute(name, points) {
        try {
            //console.log(name,points)
            axios.post(url, {
                name,
                points
            });
        }
        catch(err) {
            console.log(err);
        }
    }

    static deleteRoute(id) {
        return axios.delete(`${url}${id}`);
    }

}

export default RouteService