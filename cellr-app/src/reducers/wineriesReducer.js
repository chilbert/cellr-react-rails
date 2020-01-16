function wineriesReducer(state = {all: [] }, action) {

  let index;

  switch(action.type){

      case 'GET_WINERIES':
        return {...state, all: action.wineries}
      case 'ADD_WINERY':
        return {...state, all: state.all.concat(action.winery)}
      case "REMOVE_WINERY":
        index = state.findIndex(state => state.studio.id === action.id);
        return [...state.slice(0, index), ...state.slice(index + 1)];
      default:
        return state
    }
  }
  
  export default wineriesReducer;