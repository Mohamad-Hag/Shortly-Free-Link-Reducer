import React, { Component } from "react";
import "./styles/PanelLink.css";

class PanelLink extends Component {
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
  changeTo(props)
  {
    this.setState({class : ""});
    let className = "panel-link";

    let szProp = props.size;
    let hcProp = props.hoverColor;

    let size = szProp !== undefined ? `${szProp}-link` : "";
    let hoverStyle =
      hcProp === "none" ? "var(--links-cr)" : `var(--${hcProp}-cr)`;
    this.rootRef.current.style.setProperty("--panel-link-hover-cr", hoverStyle);

    className += ` ${size}`;
    this.setState({class: className});
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
        className={this.state.class}
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        disabled={this.props.disabled}
        style={this.props.style}
        href={this.props.to}
      >
        {this.props.text} 
      </a>
    );
  }
}

export default PanelLink;
