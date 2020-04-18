import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchActivity } from "../store/actions/activityActions";

const BoredActivities = (props) => {
  useEffect(() => {
    props.fetchActivity({
      type: "",
    });
  }, []);
  return <h1>Bored? Why not try...</h1>;
};

const mapStateToProps = (state) => {
  return {
    activity: state.activities.activity,
    isFetching: state.activities.isFetching,
    error: state.activities.error,
  };
};

export default connect(mapStateToProps, {
  fetchActivity,
})(BoredActivities);
