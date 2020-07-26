import React, { useState } from "react";
import { connect } from "react-redux";
// import { actionCreators } from "../store";
import { add } from "../store";
import Todo from "../components/ToDo";

//! or ({toDos, addToDoList})
const Home = (props) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.addToDoList(text);
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {props.toDos.map((toDo) => {
          // const passingProp = {text: toDo.text, id: toDo.id};
          return <Todo {...toDo} key={toDo.id} />;
          //! https://reactjs.org/docs/jsx-in-depth.html#spread-attributes
          /*
           If you already have props as an object, and you want to pass it in JSX, 
           you can use ... as a “spread” operator to pass the whole props object. () 
           */
          // return <Todo text={toDo.text} id={toDo.id} key={toDo.id} />;
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDoList: (text) => dispatch(add(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
