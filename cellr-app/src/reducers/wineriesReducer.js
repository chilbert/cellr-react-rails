// Removed the removewinery action type for now

function wineriesReducer(state = {all: [] }, action) {

  // let idx;

  switch(action.type){

      case 'GET_WINERIES':
        return {...state, all: action.wineries}
      case 'ADD_WINERY':
        return {...state, all: state.all.concat(action.winery)}
      // case 'REMOVE_WINERY':
      //   idx = state.findIndex(state => state.winery.id === action.winery);
      //   return [...state.slice(0, idx), ...state.slice(idx + 1)];
      default:
        return state
    }
  }
  
  export default wineriesReducer;