import {FETCH_WEATHER} from '../actions/index' ;

export default function(state = [], action) {

  switch(action.type)
  {
    case FETCH_WEATHER:
    console.log("Insidee FETCH_WEATHER Reducer");
    return [action.payload.data, ...state];
  }

  return state;
}
