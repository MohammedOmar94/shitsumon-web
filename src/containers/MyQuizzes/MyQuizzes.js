import React, { Component } from 'react';
import Section from '../../components/UI/Section/Section';

import classes from './MyQuizzes.module.scss';

class MyQuizzes extends Component {
  render() {
    return (
      <Section name='Dates 年月日' className={classes.MyQuizzes}>
      </Section>
    );
  };
}

export default MyQuizzes;