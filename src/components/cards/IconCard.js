import React, { Component } from "react";
import IconLabel from "../labels/IconLabel";
import "./styles/IconCard.css";

class IconCard extends Component {
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
        className="icon-card"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        style={this.props.style}
      >
        <IconLabel src={this.props.iconSrc} />
        <dt>{this.props.title}</dt>
        <dd>{this.props.description}</dd>
      </div>
    );
  }
}

export default IconCard;
