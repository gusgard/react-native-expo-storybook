import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Button } from '@components';
import { colors, fontSize } from '@themes';

import { iconOptions } from 'ExpoStorybook/src/components/Icon/constants';

const sizeCapOptions = Object.keys(fontSize);
const colorOptions = Object.keys(colors);

storiesOf('Button', module)
  .add('custom', () => (
    <Button
      onPress={action('pressed-custom')}
      color={select('Color', colorOptions, colorOptions[0])}
      colorText={select('colorText', colorOptions, colorOptions[1])}
      size={select('Size', sizeCapOptions, sizeCapOptions[1])}
      value={text('Value', 'Hello')}
    />
  ))
  .add('multiple', () => (
    <View>
      <Button
        onPress={action('pressed-1')}
        value={text('Example1', 'Button')}
      />
      <Button
        iconName="pencil"
        onPress={action('pressed-2')}
        value={text('Example2', 'Edit')}
      />
      <Button
        iconName={select('IconName', iconOptions, iconOptions[0])}
        onPress={action('pressed-3')}
        value={text('Example3', 'Custom icon')}
      />
    </View>
  ));
