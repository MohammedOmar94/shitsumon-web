import React, { Component, Fragment } from 'react';

import classes from './Portal.module.scss';
import Slider from "react-slick";


class Portal extends Component {
  render() {
    const settings = {
      // arrows: false,
      // lazyLoad: true,
      // fade: true,
      infinite: true,
      speed: 500,
      // swipe: false,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <Fragment>
        <Slider {...settings} className={classes.Slider}>
          <Fragment>
            <div className={classes.Slide}>
              <p className={classes.SlideCaption}>So this is currently a placeholder.</p>
            </div>
          </Fragment>
          <Fragment>
            <div className={`${classes.Slide} ${classes.MiyamotoApproveSlide}`}>
              <p className={classes.ImageCaption}>The idea of this site is to auto-generate Japanese questions with the words you currently know</p>
            </div>
          </Fragment>
          <Fragment>
            <div className={classes.Slide}>
              <p className={classes.SlideCaption}>or based on general things like dates, times etc.</p>
            </div>
          </Fragment>
          <Fragment>
            <div className={`${classes.Slide} ${classes.MiyamotoRejectSlide}`}>
              <p className={classes.ImageCaption}>...but we're still faaaaaar away from that.</p>
            </div>
          </Fragment>
          <Fragment>
            <div className={`${classes.Slide} ${classes.KirbySlide}`} >
              <p className={classes.ImageCaption}>I know, we've betrayed you and Kirby.</p>
            </div>
          </Fragment>
          <Fragment>
            <div className={classes.Slide}>
            <p className={classes.SlideCaption}>But don't worry</p>
            </div>
          </Fragment>
          <Fragment>
            <div className={`${classes.Slide} ${classes.WiggleSlide}`}>
              <p className={classes.ImageCaption}>It will be worth the wait</p>
            </div>
          </Fragment>
        </Slider>
      </Fragment>
    );
  }
}

export default Portal;