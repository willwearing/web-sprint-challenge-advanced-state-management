import React, { useEffect } from "react";
import SmurfCards from "./SmurfCards";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/index";

const SmurfCard = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      <h2>Smurf List</h2>
      {props.smurfs.map((smurf) => (
        <SmurfCards key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfCard);
