
export const saveToStore = (data) => async (dispatch) => {
    try {  
      dispatch({ type: "SAVE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const update = (data) => async (dispatch) => {
    try {  
      dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };  