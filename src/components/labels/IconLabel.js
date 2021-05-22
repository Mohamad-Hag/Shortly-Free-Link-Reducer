import React, { Component } from "react";
import "./styles/IconLabel.css";

class IconLabel extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.rootRef = React.createRef();

    // State Object
    this.state = {};

    // Binding Methods
  }
  componentDidMount() {}
  componentDidUpdate() {}
  UNSAFE_componentWillReceiveProps() {}
  render() {
    return (
      <div
        className="icon-label"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        style={{backgroundColor: this.props.background}}
      >
        <img src={this.props.src}/>
      </div>
    );
  }
}

export default IconLabel;