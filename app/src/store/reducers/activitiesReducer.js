export const initialState = {
  activity: "Hitting the fetch button",
  isFetching: true,
  error: "",
};

export const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ACTIVITY_SUCCESS":
      return {
        ...state,
        isFetching: false,
        activity: action.payload, // maybe add .activity here
        error: "",
      };
    default:
      return state;
  }
};
