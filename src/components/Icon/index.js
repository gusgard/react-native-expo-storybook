import React from 'react';
import PropTypes from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';

import { colors } from '@themes';

import { iconSize, iconOptions } from './constants';
import styles from './styles';

const Icon = ({ name, style, size, color }) => (
  <EvilIcons
    name={name}
    size={size}
    style={[styles.container, style]}
    color={colors[color]}
  />
);

Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.oneOf(iconOptions).isRequired,
  color: PropTypes.oneOf(Object.keys(colors)).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
};
Icon.defaultProps = {
  style: {},
  size: iconSize,
  color: 'black'
};

export default Icon;
