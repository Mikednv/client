
import axios from 'axios';

class StrutturaConn {
    registraStruttura = (obj) => {
        return axios.post('https://progettomdmc.herokuapp.com/strutture/strutture', obj)
    }
    modificaStruttura = (obj) => {
        return axios.post('https://progettomdmc.herokuapp.com/strutture/modificaStruttura', obj)
    }
    registraCamera = (obj) => {
        return axios.post('https://progettomdmc.herokuapp.com/strutture/registraCamera', obj)
    }
    modificaCamera = (obj) => {
        return axios.post('https://progettomdmc.herokuapp.com/strutture/modificaCamera', obj)
    }

    aggiungiFoto = (dati) => {
        return axios.post('https://progettomdmc.herokuapp.com/strutture/immagini', dati)
    }

    aggiungiImmaginiCamera = (dati) => {
        return axios.post('https://progettomdmc.herokuapp.com/strutture/immaginiCamera', dati)
    }

    getStrutture = (id) => {
        return axios.post('https://progettomdmc.herokuapp.com/strutture/getStrutture',{id,})

    }
    getCamere = (id) => {
        return axios.post('https://progettomdmc.herokuapp.com/strutture/getCamere',{id,})

    }
    getNome = () => {
        return axios.get('https://progettomdmc.herokuapp.com/strutture/getNome')

    }
    deleteStruttura = (id_struttura) => {
        return axios.post('https://progettomdmc.herokuapp.com/strutture/deleteStruttura',{id_struttura})

    }
    cancellaCamera = (id_camera) => {
        return axios.post('https://progettomdmc.herokuapp.com/strutture/cancellaCamera',{id_camera})

    }
    getTassa = (id_gestore) => {
        return axios.post('https://progettomdmc.herokuapp.com/strutture/getTassa',{id_gestore,})

    }
    prendiImmagini = (id)=>{
        return axios.post('https://progettomdmc.herokuapp.com/strutture/fetchImage', {id,})
    }
    modificaFoto = (dati) => {
        return axios.post('https://progettomdmc.herokuapp.com/strutture/modificaFoto', dati)
    }
    cancella = (obj) => {
        return axios.post('https://progettomdmc.herokuapp.com/strutture/cancella', obj)
    }

}

export default new StrutturaConn();
