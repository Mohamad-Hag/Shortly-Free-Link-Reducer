import React, { Component } from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Home from "./components/pages/Home";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    
    // Refs
    this.rootRef = React.createRef();

    // State Object
    this.state = {};

    // Binding Methods
  }
  componentDidMount()
  {

  }
  componentDidUpdate()
  {

  }
  UNSAFE_componentWillReceiveProps()
  {

  }
  render() {
    return (
      <div
        id="app"
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
      >
        <Router>
          <Switch>
            <Route exact component={Home} path="/"></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
