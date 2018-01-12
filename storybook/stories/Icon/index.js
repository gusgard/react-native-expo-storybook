import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { number, select } from '@storybook/addon-knobs';
import { View } from 'react-native';

import { Icon } from '@components';
import { colors } from '@themes';

import { iconOptions } from 'ExpoStorybook/src/components/Icon/constants';

const colorOptions = Object.keys(colors);

storiesOf('Icon', module)
  .add('multiple', () => (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      {iconOptions.map(name => <Icon key={name} name={name} />)}
    </View>
  ))
  .add('custom', () => (
    <Icon
      name={select('IconName', iconOptions, iconOptions[0])}
      color={select('Color', colorOptions, colorOptions[1])}
      size={number('Size', 300)}
    />
  ));
