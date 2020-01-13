import { applyMiddleware } from "redux";

//actions

const GET_WINERIES = () => {
    return async dispatch => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/wineries");
        const data = await response.json();
        dispatch({
          type: "GET_WINERIES",
          wineries: data
        });
      } catch (err) {
        console.log(err);
      }
    };
  };


//reducer
const wineryReducer = (state = { wineries: [] }, action) => {
    switch (action.type) {
        case GET_WINERIES:
            return {
                ...state,
                wineries: action.wineries
            };
    }

    return state;
};

export default wineryReducer;


//action_creators
export const getWineries = () => {
    return { type: GET_WINERIES };
};

// export const addWineries = () => {
//     return { type: ADD_WINERIES };
// };
