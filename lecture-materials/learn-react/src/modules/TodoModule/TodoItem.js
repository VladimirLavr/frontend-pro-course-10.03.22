import {Component} from "react";

export class TodoItem extends Component {
  render() {
    const todoItem = this.props.itemData;

    return (
      <div className={'todoItem'}>
        <h3>{todoItem.title}</h3>
        <p>id: {todoItem.id} | completed: {todoItem.completed ? "Done" : "Not Started"}</p>
        <button onClick={() => this.props.onDelete(todoItem.id)}>🗑</button>
      </div>
    );
  }
}
