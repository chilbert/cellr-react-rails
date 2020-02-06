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



// Remove Winery Action -- This is hitting the database and removing the item, but not dispatching back to my container.  Getting an error for line 58 and then again on the Reducer with FindIndex function
// Not a requirement so moving on to other items.


//   export const removeWinery = id => {
//     return async dispatch => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/v1/wineries/${id}`,
//           {
//             method: "DELETE",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify({id}),
//           }
//         );
//         const data = await response.json();
//         dispatch({
//           type: "REMOVE_WINERY",
//           winery: data
//         });
       
//       } catch (err) {
//         console.log(err);
//       }
//     };
//   };


// Reservations Actions

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
  