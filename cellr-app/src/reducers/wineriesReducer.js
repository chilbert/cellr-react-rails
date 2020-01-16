function wineriesReducer(state = {all: [] }, action) {

  switch(action.type){

      case 'GET_WINERIES':
        return {...state, all: action.wineries}
  
      case 'ADD_WINERY':
        return {...state, all: state.all.concat(action.winery)}
  
      default:
        return state
    }
  }
  
  export default wineriesReducer;