export const getWineries = WineryData => {
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/wineries');
            const data = await response.json();
            dispatch( {
                type: 'GET_WINERIES',
                wineries: data
            })
            
          } catch (err) {
            console.log(err);
          }
    }
}



export const addWinery = WineryData => {
    return async dispatch => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/wineries", {
          method: "POST",
          body: JSON.stringify(WineryData),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        dispatch({
          type: "ADD_WINERY",
          winery: data
        });
      } catch (err) {
        console.log(err);
      }
    };
  };


  export const removeWinery = id => {
    return async dispatch => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/wineries/${id}`,
          {
            method: "DELETE",
            body: JSON.stringify(id),
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const data = await response.json();
        dispatch({
          type: "REMOVE_WINERY",
          winery: data
        });
      } catch (err) {
        console.log(err);
      }
    };
  };