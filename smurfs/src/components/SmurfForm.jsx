import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions/index";

const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.postSmurf(smurf);
    document.getElementById("smurfForm").reset();
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submitHandler} id="smurfForm">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={props.name}
            placeholder="Name"
            onChange={inputHandler}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={props.age}
            placeholder="Age"
            onChange={inputHandler}
          />
        </label>
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={props.height}
            placeholder="Height"
            onChange={inputHandler}
          />
        </label>
        <button>Add a Smurf!</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.errors,
  };
};

export default connect(mapStateToProps, { postSmurf })(SmurfForm);
