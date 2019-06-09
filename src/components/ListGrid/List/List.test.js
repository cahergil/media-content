import React from 'react';
import { shallow } from 'enzyme';


import { List } from './List';
import { findByTestAttr } from '../../../testing/utils';
import * as mediaMockObjects from '../../../testing/mediaArray'

const defaultProps = {
  media: [
    mediaMockObjects.show1,
    mediaMockObjects.show2
  
  ]
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<List {...setupProps} />)
}

describe('test for List component', () => {
  
  test('renders without errors', () => {
    const wrapper = setup();
    wrapper.debug();
    const component = findByTestAttr(wrapper, 'component-list');
    expect(component.length).toBe(1);
  });

  test('renders media array correctly', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'list-item');
    expect(component.length).toBe(2);
  })
});