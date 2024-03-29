import React from "react";
import "./main-view.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "../Splash";
import SelectCity from "../SelectCity";
import StartGame from "../StartGamePage";
import Game from "../Game/index";

class MainView extends React.Component {
  state = {
    isFullScreen: false
  };

  constructor(props) {
    super(props);
    this.name = props.data.name || "main.jpg";
  }
  toggelFullscreen = () => {
    if (this.state.isFullScreen) {
      this.setState({ isFullScreen: false });
      document.exitFullscreen();
    } else {
      if (document.body.requestFullscreen) {
        document.body.requestFullscreen();
      } else if (document.body.mozRequestFullScreen) {
        /* Firefox */
        document.body.mozRequestFullScreen();
      } else if (document.body.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        document.body.webkitRequestFullscreen();
      } else if (document.body.msRequestFullscreen) {
        /* IE/Edge */
        document.body.msRequestFullscreen();
      }
      this.setState({ isFullScreen: true });
    }
  };

  render() {
    return (
      <Router>
        <div className="main-container">
          <button className="full-screen-btn" onClick={this.toggelFullscreen}>
            {this.getFullScreenIcon()}
          </button>
          <Switch>
            <Route path="/" exact component={Splash} />
            <Route path="/city" exact component={SelectCity} />
            <Route path="/city/:id" exact component={StartGame} />
            <Route path="/city/:id/game" component={Game} />
          </Switch>
        </div>
      </Router>
    );
  }

  getFullScreenIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_1"
      enableBackground="new 0 0 482.239 482.239"
      height="100%"
      viewBox="0 0 482.239 482.239"
      width="100%"
    >
      <path d="m0 17.223v120.56h34.446v-103.337h103.337v-34.446h-120.56c-9.52 0-17.223 7.703-17.223 17.223z" />
      <path d="m465.016 0h-120.56v34.446h103.337v103.337h34.446v-120.56c0-9.52-7.703-17.223-17.223-17.223z" />
      <path d="m447.793 447.793h-103.337v34.446h120.56c9.52 0 17.223-7.703 17.223-17.223v-120.56h-34.446z" />
      <path d="m34.446 344.456h-34.446v120.56c0 9.52 7.703 17.223 17.223 17.223h120.56v-34.446h-103.337z" />
    </svg>
  );
}

export default MainView;
