import React from 'react';
import {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import axios from 'axios';
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg"
import '../css/visualizzaStruttura.css';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Form'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faMapMarkerAlt, faBed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {withRouter} from 'react-router'
import AutenticazioneConn from '../connessioni/AutenticazioneConn';
import StrutturaConn from '../connessioni/StrutturaConn';





export default class visualizzaStruttura extends Component{
  async componentDidMount(){
    console.log(this.state)
    const utente = AutenticazioneConn.getCurrentUser()
    let immagini;
    immagini = await StrutturaConn.prendiImmagini(this.state.id_struttura)

     this.setState({
      imgpath:immagini.data
    })
    if (utente) {
      this.setState({
        tipo: utente.tipo
      })
    } else {
      this.setState({
        tipo: "notLoggedIn"
      })
    }
  }
  

state={
  struttura: this.props.location.state.struttura,
  check_in:this.props.location.state.check_in,
  check_out:this.props.location.state.check_out,
  permanenza_giorni:this.props.location.state.permanenza_giorni,
  camera:this.props.location.state.camera,
  tipo:"",
  hidden:false,
  visible:false,
  strutture: this.props.location.state.strutture,
  imgpath:[],
  id_struttura:this.props.location.state.id_struttura,
}

    render(){ 
    return (
        
        <div className="containerStruttura">
           {this.state.camera ? 
<Card className="CardVisualizza">          
    <div className="StrutturaHeader"><h4 align="center">{this.state.camera.nome}</h4></div>
         
                  
                <Carousel >
  <Carousel.Item>
    <CardImg variant="top"
      className="d-block w-100"
      width="400"
      height="500"
      src={'https://progettomdmc.herokuapp.com/immagini/' + this.state.camera.foto}
      rounded
    />
    
  </Carousel.Item>
</Carousel>
                <div className="descrColumn">
    <p align="left">{this.state.camera.descrizione}</p>
                    <div className="prezzocaratteristiche">
                    <FontAwesomeIcon icon="map-marker-alt" /> {this.state.camera.citta} - {this.state.camera.indirizzo} <br></br>
                    <FontAwesomeIcon icon="bed" /> Posti letto: {this.state.camera.numero_ospiti}
    <h3 align="right">Prezzo Totale: {this.state.camera.prezzo * this.state.permanenza_giorni}€</h3>
    {this.state.tipo =="notLoggedIn" ? <p align="right">Effettua l'accesso per prenotare!</p> : this.state.tipo == 0 ?
    <a  onClick={() => {                        
                               this.props.history.push({
                                 pathname: "/prenotazione",
                                 state: {    
                                   check_in: this.state.check_in,
                                   check_out: this.state.check_out,
                                   id_camera: this.state.camera.id,
                                   id_struttura: this.state.camera.id_struttura,
                                   posti_letto : this.state.camera.numero_ospiti,
                                   prezzo : this.state.camera.prezzo,
                                   tassa : this.state.camera.tassa
                                 },
                               });
                             }}> 
                             
                             <div className="prenota"><Button variant="dark" className="prenotaBtn">
              Prenota
            </Button> </div> </a> : <p align="right">Accedi con un account cliente per prenotare!</p>}
                        </div>
                        </div> 
                    
       
                </Card> 
            : 
                       <Card className="CardVisualizza">
            <div className="StrutturaHeader"><h4 align="center">{this.state.struttura.nome}</h4></div>
                        <Row><Col className="imgColumn">
                        <Carousel>
      {this.state.imgpath.map((path, index)=>
      <Carousel.Item key={index}>
            <CardImg variant="top"
      className="d-block w-100"
      width="400"
      height="500"
      src={'https://progettomdmc.herokuapp.com/' + path.path}
            rounded
    />
            
      </Carousel.Item> )}
        </Carousel>
                        </Col>
             <div className="descrColumn">           
            <p align="left">{this.state.struttura.descrizione}</p>
                            <div className="prezzocaratteristiche">
                            <FontAwesomeIcon icon="map-marker-alt" /> {this.state.struttura.citta} - {this.state.struttura.indirizzo} <br></br>
                            <p align="left">Posti letto: {this.state.struttura.numero_ospiti}</p>
            <h3 align="right">Prezzo Totale: {this.state.struttura.prezzo * this.state.permanenza_giorni}€</h3>
            {this.state.tipo == "notLoggedIn" ? <p align="right">Effettua l'accesso per prenotare!</p> : this.state.tipo == 0 ?
            <a onClick={() => {                        
                               this.props.history.push({
                                 pathname: "/prenotazione",
                                 state: {    
                                   check_in: this.state.check_in,
                                   check_out: this.state.check_out,
                                   id_struttura: this.state.struttura.id,
                                   id_camera:null,
                                   posti_letto : this.state.struttura.numero_ospiti,
                                   prezzo : this.state.struttura.prezzo,
                                   tassa : this.state.struttura.tassa
                                 },
                               });
                             }}>
            <div className="prenota"><Button variant="dark" className="prenotaBtn">
              Prenota
            </Button></div> </a> : <p align="right">Accedi con un account cliente per prenotare!</p>}
            </div>
                                </div>
                            
                        </Row>   
                        </Card>
            
            } 
        </div>
    )
}
}

library.add(fab, faBed, faCheckSquare, faMapMarkerAlt)
