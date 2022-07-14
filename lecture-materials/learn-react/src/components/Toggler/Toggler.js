import {Component} from "react";

export class Toggler extends Component {
  state = {
    enabled: false,
    users: [
      {name: "Bob", id: 1},
      {name: "Bib", id: 2},
      {name: "Bab", id: 3},
      {name: "Bub", id: 4},
      {name: "Beb", id: 5},
    ],
  };

  toggleHandler = (event) => {
    this.setState({enabled: !this.state.enabled});
    console.log(event);
  }

  enabledJSX = <p>ENABLED 🟢</p>;
  disabledJSX = <p>DISABLED 🔴</p>;

  render() {
    return (
      <div>
        <button onClick={this.toggleHandler}>Toggle</button>
        {this.state.enabled ? this.enabledJSX : this.disabledJSX}
        {this.state.enabled && this.enabledJSX}
        {!this.state.enabled && this.disabledJSX}

        {/*List rendering*/}
        {this.state.users.map(user => <p key={user.id}>{user.name}</p>)}
      </div>
    );
  }
}
