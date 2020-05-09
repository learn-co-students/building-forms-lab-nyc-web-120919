export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type){
    case 'ADD_BAND' :
      console.log(action)
      return {...state, bands: [...state.bands, action.band]}
      break;
    default:
      return state  
  }
};
