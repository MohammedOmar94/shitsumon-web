import React from 'react';
import PropTypes from 'prop-types';

import { CircleSpinner } from "react-spinners-kit";

import Backdrop from '../Backdrop/Backdrop';

Spinner.propTypes = {
  hasData: PropTypes.bool
}

Spinner.defaultProps = {
  hasData: false
}

function Spinner({ hasData }) {
  return (
    <Backdrop hide={hasData} color='white'>
      <CircleSpinner
        color={"#78cdd7"}
        loading={true}
        size={40}
      />
    </Backdrop>
  )
}

export default Spinner;