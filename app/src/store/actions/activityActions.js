import axios from "axios";

export const fetchActivity = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_ACTIVITY_START" });
    axios
      .get(`https://www.boredapi.com/api/activity`)
      .then((res) => console.log(res));
  };
};
