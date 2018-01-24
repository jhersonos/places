import React from 'react';
import { CardMedia,Card,CardText,CardTitle } from 'material-ui/Card';
import { indigo400,redA400,lightBlueA400,amberA400 } from 'material-ui/styles/colors'


export default class Benefits extends React.Component{
    render(){
        return(
            <ul>
            <Card className="Header-Benefit">
              <CardText>
                <div className="row">
                  <div className="Header-Benefit-image" style={{"background":redA400}}>
                    <img src={process.env.PUBLIC_URL+"/images/shu.png"}/>
                  </div>
                  <div className="Header-Benefit-content">
                    <h3>Los momos recien horneados</h3>
                    <p>Califica los y obten puntos</p>
                  </div>
                </div>
              </CardText>
            </Card>
            <Card className="Header-Benefit">
              <CardText>
                <div className="row">
                  <div className="Header-Benefit-image" style={{"background":lightBlueA400}}>
                    <img src={process.env.PUBLIC_URL+"/images/shu.png"}/>
                  </div>
                  <div className="Header-Benefit-content">
                    <h3>Crea tus momos</h3>
                    <p>Crea y participa por el momo del mes</p>
                  </div>
                </div>
              </CardText>
            </Card>
            <Card className="Header-Benefit">
              <CardText>
                <div className="row">
                  <div className="Header-Benefit-image" style={{"background":amberA400}}>
                    <img src={process.env.PUBLIC_URL+"/images/shu.png"}/>
                  </div>
                  <div className="Header-Benefit-content">
                    <h3>Momo Top</h3>
                    <p>Gana puntos y aparece en el mural de la fama del momo del mes</p>
                  </div>
                </div>
              </CardText>
            </Card>
          </ul>
        );
    }
}