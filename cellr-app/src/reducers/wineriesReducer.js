const wineriesReducer = (state = [{}], action) => {
    switch(action.type){
  
      case 'ADD_WINERIES':
        return [...action.wineriesReducer]
  
      default:
        return state
    }
  }
  
  export default wineriesReducer