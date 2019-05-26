import React, { Component } from 'react';

import Backdrop from './components/UI/Backdrop/Backdrop';
import SideDrawer from './components/UI/SideDrawer/SideDrawer';
import Layout from './components/Layout/Layout';
import Portal from './containers/Portal/Portal';
import Topics from './containers/Topics/Topics';
import Quiz from './containers/Quiz/Quiz';
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    const sideDrawerOpen = !this.state.sideDrawerOpen;
    this.setState({sideDrawerOpen});
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    return (
      <Layout drawerClickHandler={this.drawerToggleClickHandler}>
        <SideDrawer show={this.state.sideDrawerOpen} clicked={this.drawerToggleClickHandler}/>
        <Backdrop show={this.state.sideDrawerOpen}  clicked={this.backdropClickHandler} />
        <Route path="/" exact component={Portal} />
        <Route path="/topics" exact component={Topics} />
        <Route path="/quiz" exact component={Quiz} />
      </Layout>
    );
  }
}

export default App;
