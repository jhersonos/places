import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { CardMedia,Card,CardText,CardTitle } from 'material-ui/Card';
import { indigo400 } from 'material-ui/styles/colors'
import Title from '../components/Title';
import Benefits from '../components/Benefits'
import PlaceCard from '../components/places/PlaceCard'
import data from '../requests/places';
export default class Home extends React.Component{
    
    places(){
        return data.places.map((place,index)=>{
          return(
            <PlaceCard place={place} index={index}/>
          )
        })
      }

    render(){
        return(
          <section>
            <div className="Header-background">
            <div style={{"width":"80%","margin":"0 auto"}}>
                <div className="Header-main">  
                  <Title></Title>
                  <RaisedButton label="Crear cuenta gratuita" secondary={true}/>
                  <img src={process.env.PUBLIC_URL +'/images/inori.png'} className="Header-illustrator"/>
                </div>
                <Benefits/>
            </div>
          </div>
          <div style={{"background-color":indigo400,"padding":"50px","color":"white"}}>
              <h3 style={{"fontSize":"24px"}}>La Waifu del mes</h3>
              <div className="row">
                {this.places()}
              </div>
          </div>
          </section>
        );
    }
}
