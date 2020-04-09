import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Backdrop from './components/UI/Backdrop/Backdrop';
import Layout from './components/Layout/Layout';
import SideDrawer from './containers/SideDrawer';

// import CreateQuiz from './containers/CreateQuiz/CreateQuiz';
import Portal from './containers/Portal/Portal';
import Quiz from './containers/Quiz';
import Topics from './containers/Topics';

class App extends Component {
  state = {
    isDrawerVisible: false
  };

  onDrawerToggle = () => {
    const isDrawerVisible = !this.state.isDrawerVisible;
    this.setState({ isDrawerVisible });
  }

  onBackdropClick = () => {
    this.setState({ isDrawerVisible: false })
  }

  render() {
    const { isDrawerVisible } = this.state;

    return (
      <Layout drawerClickHandler={this.onDrawerToggle}>
        <SideDrawer show={isDrawerVisible} clicked={this.onDrawerToggle}/>
        <Backdrop hide={!isDrawerVisible}  onClick={this.onBackdropClick} />
        <Route path="/" exact component={Portal} />
        {/* <Route path="/create-quiz" exact component={CreateQuiz} /> */}
        <Route path="/:language/topics" exact component={Topics} />
        <Route path="/:language/quiz" exact component={Quiz} />
      </Layout>
    );
  }
}

export default App;
