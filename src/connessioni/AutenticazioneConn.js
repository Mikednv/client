import axios from 'axios';


     class AutenticazioneConn {
    register = (obj) => {
    return axios.post("https://progettomdmc.herokuapp.com/" + "utenti/registrazione", obj);
    }

    login = (obj) => {
      return axios.post("https://progettomdmc.herokuapp.com/" + "utenti/login", obj);
      }

    logout(){
      localStorage.clear();
    }

    getCurrentUser() {
      return JSON.parse(localStorage.getItem('utente'));;
    }
}

export default new AutenticazioneConn();
