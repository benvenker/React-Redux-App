import axios from "axios";

export const fetchActivity = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_ACTIVITY_START" });
    axios
      .get(`https://www.boredapi.com/api/activitasdfy`)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "FETCH_ACTIVITY_SUCCESS",
          payload: res.data.activity,
        });
      })
      .catch((res) => {
        dispatch({
          type: "FETCH_ACTIVITY_FAILURE",
          payload: `Error ${res.data.status}: ${res.data.error}`,
        });
      });
  };
};
