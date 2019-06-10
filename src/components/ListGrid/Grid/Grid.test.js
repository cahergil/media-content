import React from 'react';
import { shallow } from 'enzyme';


import  Grid  from './Grid';
import { findByTestAttr } from '../../../testing/utils';
import * as mediaMockObjects from '../../../testing/mediaArray'


const defaultProps = {
  media: [
    mediaMockObjects.show1,
    mediaMockObjects.show2

  ]
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Grid {...setupProps} />)
};

describe('test for Grid component', () => {
  test('renders without errors', () => {
    const wrapper = setup();
    
    const component = findByTestAttr(wrapper, 'component-grid');
    expect(component.length).toBe(1);
  });

  test('renders media array correctly', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'grid-item');
    expect(component.length).toBe(2);

  })
});