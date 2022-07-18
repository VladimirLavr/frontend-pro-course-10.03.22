import {Component} from "react";

import {TodoForm} from "./TodoForm";
import {TodoList} from "./TodoList";
import {TodoSearch} from "./TodoSearch";

export class TodoModule extends Component {

  render() {
    return (
      <div>
        {this.props.showSearchField && <TodoSearch />}
        <TodoList />
        {this.props.showCreationForm && <TodoForm />}
      </div>
    );
  }
}
