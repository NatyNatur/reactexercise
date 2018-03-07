import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  'Buenos Aires, AR',
  'Bogotá, COL',
  'Santiago, SCL',
  'Ciudad de México, MX',
  'Madrid, ES',
  'Rio de Janeiro, BR'
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null // si no queremos una ciudad en particular
    }
  }

  handleSelectionLocation = (city) => {
    this.setState({city});
    console.log(`handleSelectionLocation ${city}`);
    // onSelectedLocation(city);
  }
  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='Weather Location'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities = { cities }
               onSelectedLocation = {this.handleSelectionLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                {
                  city === null ? <h2 className='forecastTitle'>No se ha seleccionado ciudad</h2> : <ForecastExtended city = {city}></ForecastExtended>
                }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>

      /*<MuiThemeProvider>
        <div className="App">
          <LocationList cities = { cities }
          onSelectedLocation = {this.handleSelectionLocation}>
          </LocationList>
        </div>
      </MuiThemeProvider>*/
    );
  }
}

export default App;
