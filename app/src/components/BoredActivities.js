import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchActivity } from "../store/actions/activityActions";
import "../index.css";

const BoredActivities = (props) => {
  useEffect(() => {
    props.fetchActivity({
      type: "FETCH_ACTIVITY_START",
    });
  }, []);

  return (
    <div>
      <h1>Bored? Why not try...</h1>
      {props.isFetching && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      {props.activity && <h3>{props.activity}</h3>}
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={props.fetchActivity}>Fetch a new Activity!</button>
    </div>
  );
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
