import React, { Component } from "react";
import "./styles/TextBox.css";

class TextBox extends Component {
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
    let className = "textbox-in";

    let szProp = props.size;
    let erProp = props.error;

    let size = szProp !== undefined ? `${szProp}-textbox` : "";
    let error = erProp !== undefined ? "textbox-in-error" : "";
    let errorBlock = this.rootRef.current.querySelector(".textbox-in-error-block");
    if (error === "") {
      errorBlock.style.display = "none";
    } else {
      errorBlock.style.display = "block";
    }

    className += ` ${size} ${error}`;

    this.setState({ class: className });
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
      <div
        className="textbox"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        onInput={this.props.onInput}
        onChange={this.props.onChange}
        style={this.props.style}
      >
        <input
          className={this.state.class}
          id={this.props.inputId}
          type={this.props.type}
          placeholder={this.props.hint}
          autoCorrect="off"
          autoComplete="off"
        />
        <p className="textbox-in-error-block" id={this.props.errorId}>
          {this.props.error}
        </p>
      </div>
    );
  }
}

export default TextBox;
