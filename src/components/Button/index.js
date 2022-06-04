import PropTypes from 'prop-types';
import React from 'react';

import { Btn } from './styles';

export default function Button({ children, type, ...rest }) {
  return (
    <Btn {...rest} type={type}>
      {children}
    </Btn>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  type: PropTypes.oneOf(['reset', 'submit', 'button']),
};
Button.defaultProps = {
  children: undefined,
  type: 'button',
};
