import React from "react";
import './App.css'


class ToDoList extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        currentToDoItem: null,
        toDoList: [],
        strikeThrough: []
      };
  
      this.setCurrentToDoItem = this.setCurrentToDoItem.bind(this);
      this.saveToDoListItem = this.saveToDoListItem.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
  
    setCurrentToDoItem(toDoItem) {
      this.setState({
        currentToDoItem: toDoItem
      });
    }
  
    saveToDoListItem(toDoItem) {
      this.setState({
        toDoList: [...this.state.toDoList, {
          value: toDoItem,
          isComplete: false
        }]
      });
    }
  
    handleClick(index) {
      const {
        toDoList
      } = this.state;
      toDoList[index].isComplete = !toDoList[index].isComplete;
      this.setState({
        toDoList
      });
    }
  
    render() {
      return (
        <div>
            <h1>To Do List</h1>
            <label>To Do Item: </label>
            <input
                onChange={(event) => this.setCurrentToDoItem(event.target.value)}>
            </input>
            <button onClick={() => this.saveToDoListItem(this.state.currentToDoItem)}>
                Add Item
            </button>
            <div>
                <p>To Do Items</p>
                {
                  this.state.toDoList.map((item, index) =>
                    <p onClick={ () => this.handleClick(index) } className={ item.isComplete ? "completed" : '' } key={index}>{item.value} </p>)
                }
            </div>
        </div>
      );
    }
  }

  export default ToDoList;