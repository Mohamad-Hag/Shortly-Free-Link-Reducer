import React, { Component } from "react";
import "./styles/Link.css";

class Link extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.rootRef = React.createRef();

    // State Object
    this.state = {
      class: "",
    };

    // Binding Methods
    this.changeTo = this.changeTo.bind(this);
  }
  changeTo(props) {
    this.setState({ class: "" });
    let className = "link";

    let szProp = props.size;
    let hcProp = props.hoverColor;
    let crProp = props.color;
    let currentStyle = this.rootRef.current.style;

    let size = szProp !== undefined ? `${szProp}-link` : "";

    crProp = crProp !== undefined ? crProp : currentStyle.color;
    hcProp = hcProp !== undefined ? hcProp : currentStyle.color;

    currentStyle.setProperty("--link-hover-cr", hcProp);
    currentStyle.setProperty("--link-cr", crProp);    

    className += ` ${size}`;
    this.setState({class: className})
  }
  componentDidMount() {
    this.changeTo(this.props);
  }
  componentDidUpdate() {}
  UNSAFE_componentWillReceiveProps(newProp) {
    this.changeTo(newProp);
  }
  render() {
    return (
      <a
        className="link"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        style={this.props.style}
        href={this.props.to}
      >
        {this.props.text}
      </a>
    );
  }
}

export default Link;
