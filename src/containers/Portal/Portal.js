import React, { Component } from 'react';

import classes from './Portal.module.scss';
import PortalLink from '../../components/PortalLink/PortalLink';


class Portal extends Component {
  render() {
    return (
      <div className={classes.Portal}>
          <ul>
            <li><PortalLink label='Partner Up' /></li>
            <li><PortalLink label='Games' /></li>
            <li>
                <PortalLink href='/my-tests' label='My Tests' />
            </li>
            <li><PortalLink label='Profile' /></li>
          </ul>
      </div>
    );
  }
}

export default Portal;