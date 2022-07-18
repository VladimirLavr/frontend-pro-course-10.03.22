import {Component} from "react";
import './NothingToShow.scss';

export class NothingToShow extends Component {
  render() {
    return (
      <div className={"nothingToShow"}>
        <h2>{this.props.displayText}</h2>
      </div>
    );
  }
}
