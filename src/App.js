import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Portal from './containers/Portal/Portal';
import MyQuizzes from './containers/MyQuizzes/MyQuizzes';

class App extends Component {
  render() {
    return (
      <Layout>
        <Portal />
      </Layout>
    );
  }
}

export default App;
