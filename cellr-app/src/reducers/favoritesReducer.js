function favoritesReducer(state = { all: [] }, action) {
    switch (action.type) {
      case "GET_FAVORITES":
        return { ...state, all: action.favorites };

      default:
        return state;
    }
  }
  
  export default favoritesReducer;