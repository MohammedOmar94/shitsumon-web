import React, { Component } from 'react';

import classes from './Portal.module.scss';
import PortalLink from '../../components/PortalLink/PortalLink';


class Portal extends Component {
  render() {
    return (
      <div className={classes.Portal}>
        <PortalLink label='Partner Up' />
        <PortalLink label='Games' />
        <PortalLink href='/my-tests' label='My Quizzes' />
        <PortalLink label='Profile' />
      </div>
    );
  }
}

export default Portal;