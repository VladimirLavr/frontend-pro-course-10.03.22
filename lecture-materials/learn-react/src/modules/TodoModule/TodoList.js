import {Component} from "react";
import {TodoItem} from "./TodoItem";
import {NothingToShow} from "../../components";

import './Todo.scss';

export class TodoList extends Component {

  render() {
    return (
      <div className="todoList">
        {this.props.todos.length
          ? this.props.todos.map((item) => <TodoItem key={item.id} itemData={item} onDelete={this.props.onTodoDelete} />).slice(0, 3)
          : <NothingToShow displayText={"зараз немає чого тобі показати! 😘"}/>
        }
      </div>
    );
  }
}
