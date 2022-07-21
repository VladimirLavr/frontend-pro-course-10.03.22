import {Component} from "react";
import {v4 as randomId} from "uuid";

export class TodoForm extends Component {
  state = {todoItemDraft: ''};

  onCreate = () => {
    if (this.state.todoItemDraft) {

      this.props.onTodoCreate({
        id: randomId(),
        title: this.state.todoItemDraft,
        completed: false,
      });

      this.setState({todoItemDraft: ''});
    }
  };

  render() {
    return (
      <div className="todoForm">
        <input
          type="text"
          name="todo"
          placeholder="What you need to do?"
          value={this.state.todoItemDraft}
          onChange={(event) => this.setState({todoItemDraft: event.target.value})}
        />
        <button onClick={this.onCreate}>Add Todo Item</button>
      </div>
    );
  }
}
