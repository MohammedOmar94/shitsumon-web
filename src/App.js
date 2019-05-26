import React, { Component } from 'react';

import Backdrop from './components/UI/Backdrop/Backdrop';
import SideDrawer from './components/UI/SideDrawer/SideDrawer';
import Layout from './components/Layout/Layout';
import Portal from './containers/Portal/Portal';
import MyQuizzes from './containers/MyQuizzes/MyQuizzes';
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
        <Route path="/my-tests/" exact component={MyQuizzes} />
      </Layout>
    );
  }
}

export default App;
