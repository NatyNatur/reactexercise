import React, { Component } from 'react';
// conecta con mis estados
import { connect } from 'react-redux';
import setCity from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
	handleSelectionLocation = (city) => {
		this.setState({city});
		this.props.setCity(city)
	}
}