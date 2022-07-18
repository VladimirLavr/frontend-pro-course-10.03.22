import {Component} from "react";
import {v4 as randomId} from "uuid";

export class TodoForm extends Component {
  state = {todoItemDraft: ''};

  onCreate = () => {
    console.log({
      id: randomId(),
      title: this.state.todoItemDraft,
      completed: false,
    });

    this.setState({todoItemDraft: ''});
  };

  render() {
    return (
      <div className="todoForm">
        <input
          type="text"
          name="todo"
          value={this.state.todoItemDraft}
          onChange={({target}) => this.setState({todoItemDraft: target.value})}
        />
        <p>{this.state.todoItemDraft}</p>
        <button onClick={this.onCreate}>Add Todo Item</button>
      </div>
    );
  }
}
