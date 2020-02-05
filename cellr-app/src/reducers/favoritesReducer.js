function favoritesReducer(state = { all: [] }, action) {
    switch (action.type) {
      case "GET_FAVORITES":
        return { ...state, all: action.favorites };
      // case "ADD_FAVORITE":
      // return { ...state, all: state.all.concat(action.favorites) };

      default:
        return state;
    }
  }
  
  export default favoritesReducer;