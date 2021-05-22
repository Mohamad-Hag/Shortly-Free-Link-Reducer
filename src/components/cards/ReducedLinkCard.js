import React, { Component } from "react";
import Button from "../inputs/buttons/Button";
import Link from "../inputs/links/Link";
import "./styles/ReducedLinkCard.css";

class ReducedLinkCard extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.rootRef = React.createRef();

    // State Object
    this.state = {
      copyBackground: undefined,
      copyText: "Copy",
    };

    // Binding Methods
    this.copyClicked = this.copyClicked.bind(this);
  }
  copyClicked(e) {
    let shortLink = this.rootRef.current.querySelector(".link").innerText;
    let textArea = document.createElement("textarea");
    textArea.value = shortLink;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    this.setState({ copyBackground: "secondary", copyText: "Copied!" }, () => {
      setTimeout(() => {
        this.setState({ copyBackground: undefined, copyText: "Copy" });
      }, 1500);
    });
  }
  componentDidMount() {}
  componentDidUpdate() {}
  UNSAFE_componentWillReceiveProps() {}
  render() {
    return (
      <div
        className="reduced-link-card"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
      >
        <p className="reduced-link-card-original">{this.props.original}</p>
        <div className="reduced-link-card-right">
          <Link text={this.props.short} to={this.props.short}></Link>
          <Button
            text={this.state.copyText}
            background={this.state.copyBackground}
            onClick={this.copyClicked}
            size="small"
          />
        </div>
      </div>
    );
  }
}

export default ReducedLinkCard;
