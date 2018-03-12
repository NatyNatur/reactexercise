import { SET_CITY } from './../actions';

export const city = (state, action) => {
	switch (action.type) {
    case SET_CITY:
    // le pasará el nuevo valor. Spread propagation - operador de propagación
      return {...state, city: action.value}
    default:
    //no se modificó el type
      return state
  }
}