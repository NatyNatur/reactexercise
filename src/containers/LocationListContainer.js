import React, { Component } from 'react';
// conecta con mis estados
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';


// se hizo un puente entre LocationList y App, y este es el que maneja el estado de la aplicación
// este realiza las consultas y le pasa a LocationList los cambios de estado
class LocationListContainer extends Component {
	handleSelectionLocation = (city) => {
    // this.setState({city});
    // recibe las propiedades gracias al connect
		this.props.setCity(city);
  }
  // componentes de clases necesitan un render, y retornar dentro de div
  render() {
    return (
      <div>
        <LocationList cities = { this.props.cities } onSelectedLocation = {this.handleSelectionLocation}>
        </LocationList>
      </div>
    )
  }
}

// esta función nos deja trabajar con las acciones
const mapDispatchToPropsActions = (dispatch) => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);