import axios from 'axios';


     class AreaPersonaleConn {
    fetchUtente=(id)=>{
            return axios.post("https://progettomdmc.herokuapp.com/"+ "areaPersonale/fetchUtenti", {id,});
    }
    modificaDati = (obj) => {
    return axios.post("https://progettomdmc.herokuapp.com/" + "areaPersonale/modificaDati", obj);
    }
    modificaPassword = (obj)=>{
        return axios.post("https://progettomdmc.herokuapp.com/"+ "areaPersonale/modificaPassword", obj);
    }
    getGuadagni=()=>{
        return axios.get("https://progettomdmc.herokuapp.com/"+ "areaPersonale/getGuadagni");
    }

}

export default new AreaPersonaleConn();
