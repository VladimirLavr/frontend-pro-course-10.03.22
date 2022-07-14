import {Component} from "react";
import "./Counter.scss";

export class Counter extends Component {

  constructor(props) {
    super(props);
    console.log("constructor");
    console.log(this.props, this.state);
  }

  state = {
    count: this.props.initialCount || 0,
  };

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.props, this.state);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log(prevProps, prevState);
    console.log(this.props, this.state);
  }

  componentWillUnmount() {
    console.log("good bye!");
  }

  incrementCount = () => {
    this.setState({count: this.state.count + 1});
  };

  decrementCount = () => {
    this.setState({count: this.state.count - 1});
  };

  render() {
    console.log("render");
    console.log(this.props, this.state);
    return (
      <div className="Counter">
        {<p>lol</p>}
        <button onClick={this.decrementCount}>-</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementCount}>+</button>

      </div>
    );
  }
}
