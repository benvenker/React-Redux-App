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
    case "FETCH_ACTIVITY_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_ACTIVITY_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
