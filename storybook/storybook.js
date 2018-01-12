import React from 'react';
import { AppRegistry } from 'react-native';
import {
  addDecorator,
  getStorybookUI,
  configure
} from '@storybook/react-native';
import { Usage } from 'storybook-usage';
import { withKnobsOptions } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { loadStories } from './storyLoader';

// Global decorators
addDecorator(withSmartKnobs);
addDecorator(Usage);
addDecorator(
  withKnobsOptions({
    debounce: { wait: 200, leading: true },
    timestamps: true
  })
);

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  port: 7007,
  host: 'localhost', // YOUR IP
  onDeviceUI: true,
  resetStorybook: true
});

const StorybookUIHMRRoot = () => <StorybookUIRoot />;

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
