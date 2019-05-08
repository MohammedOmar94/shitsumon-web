import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import MyQuizzes from './containers/MyQuizzes/MyQuizzes';

class App extends Component {
  render() {
    return (
      <Layout>
        <MyQuizzes />
      </Layout>
    );
  }
}

export default App;
