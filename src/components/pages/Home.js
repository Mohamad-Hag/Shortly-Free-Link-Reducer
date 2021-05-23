import React, { Component } from "react";
import Button from "../inputs/buttons/Button";
import Link from "../inputs/links/Link";
import PanelLink from "../inputs/links/PanelLink";
import SocialLink from "../inputs/links/SocialLink";
import TextBox from "../inputs/textboxes/TextBox";
import IconLabel from "../labels/IconLabel";
import "./styles/Home.css";
import brImg from "../../assets/images/vectors/icon-brand-recognition.svg";
import drImg from "../../assets/images/vectors/icon-detailed-records.svg";
import fcImg from "../../assets/images/vectors/icon-fully-customizable.svg";
import Header from "../panels/Header";
import IconCard from "../cards/IconCard";
import ReducedLinkCard from "../cards/ReducedLinkCard";
import introImg from "../../assets/images/vectors/illustration-working.svg";
import Footer from "../panels/Footer";
import Axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.rootRef = React.createRef();

    // State Object
    this.state = {
      shortenLoading: false,
      shortenError: undefined,
      shortenText: "",
      linkCards: [],
    };

    // Binding Methods
    this.shortenClicked = this.shortenClicked.bind(this);
    this.shortenTextChanged = this.shortenTextChanged.bind(this);
    this.shortenKeyUpped = this.shortenKeyUpped.bind(this);
  }
  shortenKeyUpped(e) {
    if (e.keyCode === 13) this.shortenClicked();
  }
  shortenTextChanged(e) {
    let target = e.target;
    let value = target.value;
    this.setState({ shortenText: value });
    this.setState({ shortenError: undefined });
  }
  shortenClicked() {
    if (this.state.shortenLoading === true) return;
    let target = document.querySelector("#shorten-it-btn");
    let linkToShorten = document.querySelector("#shorten-link-inp").value;
    let linkCards = document.querySelector("#link-cards");

    if (linkToShorten === "") {
      this.setState({ shortenError: "Please add a link" });
      return;
    }

    this.setState({ shortenLoading: true });
    target.setAttribute("disabled", "true");
    Axios.get(`https://api.shrtco.de/v2/shorten?url=${linkToShorten}`)
      .then((response) => {
        this.setState({ shortenLoading: false });
        target.removeAttribute("disabled");
        let data = response.data;
        let urlBefore = data.result.original_link;
        let urlAfter = data.result.full_short_link;

        linkCards.style.display = "flex";
        this.setState((prev) => ({
          linkCards: [
            {
              original: urlBefore,
              short: urlAfter,
            },
            ...prev.linkCards
          ],
        }));
      })
      .catch((err) => {
        this.setState({ shortenLoading: false });
        this.setState({ shortenError: "Please enter a valid URL" });
        target.removeAttribute("disabled");
      });
  }
  componentDidMount() {}
  componentDidUpdate() {}
  UNSAFE_componentWillReceiveProps() {}
  render() {
    return (
      <div
        className={this.props.className}
        id="home"
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
      >
        <div id="intro-header">
          <Header
            links={[
              { text: "features", to: "#" },
              { text: "Pricing", to: "#" },
              { text: "Resources", to: "#" },
            ]}
          />
          <div id="intro">
            <div id="intro-inner">
              <div id="intro-welcoming">
                <h1>More than just shorter links</h1>
                <p>
                  Build your brand’s recognition and get detailed insights on
                  how your links are performing.
                </p>
                <Button text="Get Started" size="medium" type="rounded" />
              </div>
              <img src={introImg} />
            </div>
          </div>
        </div>
        <div id="space">
          <div id="shorten-link-container">
            <TextBox
              id="shorten-link-in"
              inputId="shorten-link-inp"
              hint="Shorten a link here..."
              size="medium"
              error={this.state.shortenError}
              onInput={this.shortenTextChanged}
              onKeyUp={this.shortenKeyUpped}
            />
            <Button
              id="shorten-it-btn"
              text="Shorten It!"
              onClick={this.shortenClicked}
              loading={this.state.shortenLoading}
            />
          </div>
        </div>
        <div id="contents">
          <div id="link-cards">
            {this.state.linkCards.map((card) => {
              return (
                <ReducedLinkCard original={card.original} short={card.short} />
              );
            })}
          </div>
          <section id="stats-section">
            <h1>Advanced Statistics</h1>
            <p id="stats-description">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
            <div id="stats-cards">
              <IconCard
                iconSrc={brImg}
                title="Brand Recognition"
                description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
              />
              <div className="card-seperator"></div>
              <IconCard
                id="icon-card1"
                iconSrc={drImg}
                title="Detailed Records"
                description="  Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
              />
              <div className="card-seperator"></div>
              <IconCard
                id="icon-card2"
                iconSrc={fcImg}
                title="Fully Customizable"
                description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              />
            </div>
          </section>
        </div>
        <section id="boost-section">
          <h1>Boost your links today</h1>
          <Button text="Get Started" size="medium" type="rounded" />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
