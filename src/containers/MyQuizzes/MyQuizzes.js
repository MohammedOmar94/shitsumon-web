import React, { Component } from 'react';
import Section from '../../components/UI/Section/Section';

import classes from './MyQuizzes.module.scss';

class MyQuizzes extends Component {
  render() {
    return (
      <Section name='Dates' className={classes.MyQuizzes}>
        <p>27th October 2018 - [Japanese text here]</p>
      </Section>
    );
  };
}

export default MyQuizzes;