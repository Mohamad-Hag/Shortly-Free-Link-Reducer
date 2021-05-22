import React, { Component } from "react";
import "./styles/SocialLink.css";
import facebookSVG from "../../../assets/images/vectors/icon-facebook.svg";
import twitterSVG from "../../../assets/images/vectors/icon-twitter.svg";
import pinterestSVG from "../../../assets/images/vectors/icon-pinterest.svg";
import instagramSVG from "../../../assets/images/vectors/icon-instagram.svg";

class SocialLink extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.rootRef = React.createRef();

    // State Object
    this.state = {
      mediaLink: facebookSVG,
      class: "",
    };
    // Binding Methods
    this.changeTo = this.changeTo.bind(this);
  }
  changeTo(props) {
    this.setState({ class: "" });
    let className = "social-link";

    let media = props.media;
    let szProp = props.size;

    let size = szProp !== undefined ? `${szProp}-social-link` : "";

    className += ` ${size}`;    

    if (media === "facebook") {
      this.setState({ mediaLink: facebookSVG });
    } else if (media === "twitter") {
      this.setState({ mediaLink: twitterSVG });
    } else if (media === "pinterest") {
      this.setState({ mediaLink: pinterestSVG });
    } else if (media === "instagram") {
      this.setState({ mediaLink: instagramSVG });
    }

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
      <a
        className={this.state.class}
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        href={this.props.to}
      >
        <img src={this.state.mediaLink} />
      </a>
    );
  }
}

export default SocialLink;
