import React, { Component } from "react";
import "./styles/Button.css";

class Button extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.rootRef = React.createRef();

    // State Object
    this.state = {
      class: "",
      loading: false,
    };

    // Binding Methods
    this.changeTo = this.changeTo.bind(this);
  }
  changeTo(props) {
    this.setState({class: ""});
    let className = "button";

    let bgProp = props.background;
    let crProp = props.color;
    let tpProp = props.type;
    let szProp = props.size;
    let lgProp = props.loading === undefined ? false : props.loading;

    let background = bgProp !== undefined ? `${bgProp}-bg` : "";
    let color = crProp !== undefined ? `${crProp}-txt` : "";
    let type = tpProp !== undefined ? `${tpProp}-button` : "";
    let size = szProp !== undefined ? `${szProp}-button` : "";
    let loading = lgProp ? "loading-button" : "";

    className += ` ${background} ${color} ${type} ${size} ${loading}`;

    this.setState({ class: className, loading: lgProp }, () => {
      if (loading !== "" && color !== "") {
        let loader = this.rootRef.current.querySelector(".loader");
        loader.style.border = `3px solid var(--${crProp}-cr)`;
      }
    });
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
      <button
        className={this.state.class}
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        disabled={this.props.disabled}
        style={this.props.style}
      >
        {!this.state.loading ? this.props.text : <div className="loader"></div>}
      </button>
    );
  }
}

export default Button;
