import "./styles.scss";

import React from 'react';

function BackButton({ onClick }) {
  return <i onClick={onClick} className="fas fa-arrow-circle-left backButton__closeBtn"></i>
}

export default BackButton;