import { SET_CITY } from './../actions';

export const city = (state, action) => {
	switch (action.type) {
    case SET_CITY:
    // le pasará el nuevo valor
      return {...state, city: action.value}
    default:
      break;
  }
  return state;
}