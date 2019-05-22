import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Portal from './containers/Portal/Portal';
import MyQuizzes from './containers/MyQuizzes/MyQuizzes';
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/" exact component={Portal} />
        <Route path="/my-tests/" exact component={MyQuizzes} />
      </Layout>
    );
  }
}

export default App;
