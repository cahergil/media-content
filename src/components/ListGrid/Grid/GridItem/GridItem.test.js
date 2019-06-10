import React from 'react';
import { shallow } from 'enzyme';

import { GridItem } from './GridItem';
import { findByTestAttr } from '../../../../testing/utils';


const defaultProps = {
  title: 'El nombre de la rosa',
  imageUrl: 'https://static.megustaleer.com/images/libros_200_x/EH418197.jpg',
  id:12
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GridItem {...setupProps} />)
}

describe('test for GridItem component', () => {

  test('renders without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-gridItem');
    expect(component.length).toBe(1);
  });
  test('renders title prop', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'title');
    expect(component.text()).toContain(defaultProps.title);
  });

});


