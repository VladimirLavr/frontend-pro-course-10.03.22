import {Component} from "react";

import {TodoForm} from "./TodoForm";
import {TodoList} from "./TodoList";
import {TodoSearch} from "./TodoSearch";

export class TodoModule extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json()).then((data) => {
      this.setState({todos: data});
    });
  }

  onTodoCreateHandler = (todoItem) => {
    this.setState({todos: [todoItem, ...this.state.todos]});
  }

  deleteHandler = (todoItemId) => {
    this.setState({todos: this.state.todos.filter(({id}) => id !== todoItemId)});
  };

  render() {
    return (
      <div>
        {this.props.showSearchField && <TodoSearch />}
        <TodoList todos={this.state.todos} onTodoDelete={this.deleteHandler} />
        {this.props.showCreationForm && <TodoForm onTodoCreate={this.onTodoCreateHandler} />}
      </div>
    );
  }
}
