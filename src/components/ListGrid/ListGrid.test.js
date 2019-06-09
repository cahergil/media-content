import React from 'react';
import { shallow } from 'enzyme';

import ListGrid from './ListGrid';
import { findByTestAttr } from './../../testing/utils';




const defaultProps = {
  media: [],
  showList: false,
  showGrid: false,
  isShows: false,
  isEpisodes: false

}
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<ListGrid {...setupProps} />)
}

describe('test for ListGrid component', () => {
  
  test('render ListGrid component without errors ', () => {

    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-listGrid');
    expect(component.length).toBe(1);
  
  });
  test('render List component when showList prop is true', () => {
    const wrapper = setup({ showList: true });
    const component = findByTestAttr(wrapper, 'component-list')
    expect(component.length).toBe(1);

  });
  test('render Grid component when showGrid prop is true', () => {
    const wrapper = setup({ showGrid: true });
    const component = findByTestAttr(wrapper, 'component-grid')
    expect(component.length).toBe(1);
  });

});