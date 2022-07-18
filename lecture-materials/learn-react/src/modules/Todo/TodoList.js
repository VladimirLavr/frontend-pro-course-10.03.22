import {Component} from "react";
import {TodoItem} from "./TodoItem";
import {NothingToShow} from "../../components";

import './Todo.scss';

export class TodoList extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json()).then((data) => {
      this.setState({todos: data});
    });
  }

  deleteHandler = (todoItemId) => {
    this.setState({todos: this.state.todos.filter(({id}) => id !== todoItemId)});
  };

  render() {
    return (
      <div className="todoList">
        {this.state.todos.length
          ? this.state.todos.map((item) => <TodoItem key={item.id} itemData={item} onDelete={this.deleteHandler} />).slice(0, 10)
          : <NothingToShow displayText={"зараз немає чого тобі показати! 😘"}/>
        }
      </div>
    );
  }
}
