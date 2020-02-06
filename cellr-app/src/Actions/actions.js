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



// Favorite Actions

export const getFavorites = () => {
    return async dispatch => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/users/1/wineries");
        const data = await response.json();
        dispatch({
          type: "GET_FAVORITES",
          favorites: data
        });
      } catch (err) {
        console.log(err);
      }
    };
  };
  
  export const addFavorite = favoriteData => {
    return async dispatch => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/user_wineries`,
          {
            method: "POST",
            body: JSON.stringify(favoriteData),
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const data = await response.json();
        dispatch({
          type: "ADD_FAVORITE",
          favorites: data
        });
      } catch (err) {
        console.log(err);
      }
    };
  };
  

  export const removeFavorite = result => {
        return async dispatch => {
          try {
            const response = await fetch(
              `http://localhost:3000/api/v1/user_wineries/${result}`,
              {
                method: "DELETE",
                body: JSON.stringify(result),
                headers: {
                  "Content-Type": "application/json"
                },
              }
            );
            
            const data = await response.json();
            console.log(data)
            dispatch({
              type: "REMOVE_FAVORITE",
              favorites: data
            });
           
          } catch (err) {
            console.log(err);
          }
        };
      };