import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import Button from './';

describe('Button testing renders', () => {
  it('with text', () => {
    const wrapper = shallow(<Button value="Text" onPress={() => undefined} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('with color prop', () => {
    const wrapper = shallow(
      <Button color="secondary" value="Text color" onPress={() => undefined} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('with iconName prop', () => {
    const wrapper = shallow(
      <Button iconName="pencil" value="Text icon" onPress={() => undefined} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ButtonText testing events', () => {
  it('should handle button pressed', () => {
    const onPress = sinon.spy();
    const wrapper = shallow(<Button value="onPress" onPress={onPress} />);

    wrapper.simulate('press');
    expect(onPress).toHaveProperty('callCount', 1);
  });
});
