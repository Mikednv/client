import axios from 'axios';


     class prenotazioneConn {
        pagamento = (obj) => {
            return axios.post("https://progettomdmc.herokuapp.com/" + "prenotazione/pagamento", obj);
            }
        prenotaCamera = (obj) => {
            return axios.post("https://progettomdmc.herokuapp.com/" + "strutture/prenotaCamera", obj);
            }
        prenotaStruttura = (obj) => {
            return axios.post("https://progettomdmc.herokuapp.com/" + "prenotazione/prenotaStruttura", obj);
            }    
        getid = (obj) => {
            return axios.post('https://progettomdmc.herokuapp.com/prenotazione/getId', obj); }
       
        conferma = (obj) => {
            return axios.post('https://progettomdmc.herokuapp.com/prenotazione/conferma', obj); }
        
        getGuadagni = (id) => {
            return axios.post('https://progettomdmc.herokuapp.com/prenotazione/getGuadagni',{id,})
    
        }
        getPrenotazioniStrutture = (id) => {
            return axios.post('https://progettomdmc.herokuapp.com/prenotazione/getPrenotazioniStrutture', {id,});
        }
        getPrenotazioniCamere = (id) => {
            return axios.post('https://progettomdmc.herokuapp.com/prenotazione/getPrenotazioniCamere', {id,});
        }
        getPrenotazioniUtenteStrutture = (id) => {
            return axios.post('https://progettomdmc.herokuapp.com/prenotazione/getPrenotazioniUtenteStrutture', {id,});
        }
        getPrenotazioniUtenteCamere = (id) => {
            return axios.post('https://progettomdmc.herokuapp.com/prenotazione/getPrenotazioniUtenteCamere', {id,});
        }
    }   

export default new prenotazioneConn();
