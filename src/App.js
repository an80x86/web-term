import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/actions";

class App extends Component {
  delTodo = (value) => {
    //console.log(value);
    this.props.delTodo(value);
  }
  
  render() {
    let input;
    return (
      <div className="container">
        <h1>My First Bootstrap Page</h1>
        <p>This is some text.</p>
        <form
          onSubmit={e => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              this.props.addTodo(input.value);
              input.value = "";
            }}
            >
            <input ref={node => (input = node)} />
            &nbsp;&nbsp;
            <input type="submit" className="btn btn-info" value="submit"></input>
          </form>

          <br/><br/>
          <ul className="list-group">
            {this.props.todoArr.map(el => (
              <li onClick={(e) => this.delTodo(el,e)}  className="list-group-item" key={el.key}>{el.item}</li>
            ))}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoArr: state.todoArr
  };
};

const mapDispachToProps = dispatch => {
  return {
    addTodo: d => dispatch(actionCreator.onAddTodo(d)),
    delTodo: d => dispatch(actionCreator.onDelTodo(d)),
    
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
