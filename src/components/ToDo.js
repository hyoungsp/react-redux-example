import React from "react";
import { connect } from "react-redux";
// import { actionCreators } from "../store";
import { Link } from "react-router-dom";
import { remove } from "../store";

function Todo(props) {
  //   console.log(props);
  return (
    <li>
      <Link to={`/${props.id}`}>{props.text}</Link>
      <button onClick={props.onBtnClickDelete}>Delete</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  //! creating a prop ; creating a function with combination of ToDo's props and redux-store dispatch
  return {
    //! whatever returned here can be accessed as props of the component
    onBtnClickDelete: () => dispatch(remove(ownProps.id))
  };
};

export default connect(null, mapDispatchToProps)(Todo);
