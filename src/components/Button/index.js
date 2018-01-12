import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, ViewPropTypes } from 'react-native';

import { Icon } from '@components';
import { colors, fontSize } from '@themes';

import styles from './styles';

const Button = props => {
  const { style, onPress, iconName, value, color, colorText, size } = props;

  const stylesContainer = [
    {
      backgroundColor: colors[color]
    },
    styles.container,
    style
  ];
  const stylesText = [
    {
      fontSize: fontSize[size],
      color: colors[colorText]
    },
    styles.text
  ];

  return (
    <TouchableOpacity onPress={onPress} style={stylesContainer}>
      {iconName && <Icon name={iconName} color={colorText} />}
      <Text style={stylesText}>{value}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(Object.keys(fontSize)).isRequired,
  color: PropTypes.oneOf(Object.keys(colors)).isRequired,
  colorText: PropTypes.oneOf(Object.keys(colors)).isRequired,
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  iconName: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};
Button.defaultProps = {
  iconName: false,
  color: 'primary',
  colorText: 'white',
  style: {},
  size: 'medium'
};

export default Button;
