import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

dropdown.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.object
}

function dropdown({ className, label, onChange, options }) {
  const dropdownClasses = classnames(
    'dropdown',
    className
  )

  return (
    <div className={dropdownClasses}>
      <p className='dropdown__label'>{label}</p>
      <select className='dropdown__select' onChange={(evt) => onChange(evt)}>
        {options.map(option => (
          option && <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}

export default dropdown;
