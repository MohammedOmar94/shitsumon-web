import React, { Component, Fragment } from 'react';

import classes from './Portal.module.scss';
import PortalLink from '../../components/PortalLink/PortalLink';
import Slider from "react-slick";


class Portal extends Component {
  render() {
    const settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      focusOnSelect: false,
      swipe: false,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <Fragment>
        <div className={classes.Portal}>
          <PortalLink label='Partner Up' />
          <PortalLink label='Games' />
          <PortalLink href='/my-tests' label='My Quizzes' />
          <PortalLink label='Profile' />
        </div>

        <Slider {...settings} className={classes.Slider}>
          <div className={classes.Slide}>
            <p>Partner up with other people!</p>
          </div>
          <div className={classes.Slide}>
            <p>Play a cheeky few games to make things entertaining.</p>
          </div>
          <div className={classes.Slide}>
            <p>Make you're own tests and do stuff.</p>
          </div>
          <div className={classes.ImageSlide}>
            <p>Uh-oh. Kirby is hangry.</p>
          </div>
        </Slider>
      </Fragment>
    );
  }
}

export default Portal;