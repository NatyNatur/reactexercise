import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
// import { store } from '/.store';
// import { setCity } from './actions';
import './App.css';


const cities = [
  'Buenos Aires, AR',
  'Bogotá, COL',
  'Santiago, SCL',
  'Ciudad de México, MX',
  'Madrid, ES',
  'Rio de Janeiro, BR'
];
/*
// función crea un objeto vacío - esta es una función pura
const store = createStore(() => {},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
*/

class App extends Component {
  // ya no necesito el constructor ya que la App no maneja el estad
  /*
  constructor() {
    super();
    this.state = {
      city: null // si no queremos una ciudad en particular
    }
  }*/
  render() {
    // const { city } = this.state;
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
              <LocationListContainer cities = {cities}></LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  <ForecastExtendedContainer></ForecastExtendedContainer>
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

// connect recibe dos funciones en su interior, null no la estamos ocupando
// mapDispatchToPropsActions
// toma dos funciones, y su resultado se le agrega a App. Evalúa el estado
// const AppConnected = connect(null, mapDispatchToPropsActions)(App)

/*
// son dos funciones
const connect = (value1, value2) => {
  console.log(value1);
  console.log(value2);
  // se le agrega el resultado de connect al component
  const result = `${component} - ${value1*value2}`;
  console.log(result);
  return result;
}
const componentConnected = connect(2,3);

componentConnected('App');
*/

/*
App.propTypes = {
  setCity: PropTypes.func.isRequired,
}
*/

export default App;
