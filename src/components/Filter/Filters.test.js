import React from 'react';
import { shallow } from 'enzyme';
import  createMount  from '@material-ui/core/test-utils/createMount';
// import { createShallow } from '@material-ui/core/test-utils'
import createShallow from '@material-ui/core/test-utils/createShallow'; // works!
import { findByTestAttr } from '../../testing/utils/';
import { Filter } from './Filters'
import { Checkbox } from '@material-ui/core';



const defaultProps = {
  isShows: false,
  isEpisodes: false,
  isList: false,
  isGrid: false,
  clickShows: jest.fn(),
  clickEpisodes: jest.fn(),
  clickList: jest.fn(),
  clickGrid: jest.fn()
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Filter {...setupProps} />)
};

describe('test for Filters component', () => {
  
  test('renders without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-filters');
    expect(component.length).toBe(1);
  });
  test('test checkbox shows checked state reflect the props state', () => {
    const mount = createMount();
    const wrapper = mount(<Filter {...defaultProps} />);
  
    const checkBoxes = wrapper.find(Checkbox).getElements()
    
    const checkShows = checkBoxes[0]
    expect(checkShows.props.checked).toEqual(false);
    

  });
  // test('test checkbox checked changed', () => {
  //   const mount = createMount();
  //   const wrapper = mount(<Filter {...defaultProps} />);

  //   const checkShows = wrapper.find(Checkbox).getElements()[0]

    
  //   expect(checkShows.props.checked).toEqual(false);
  //   checkShows.props.onChange({target: {checked: true}})
  // });

  test('test checkbox episodes checked state reflect the props state', () => {
    const mount = createMount();
    const wrapper = mount(<Filter {...defaultProps} />);

    const checkBoxes = wrapper.find(Checkbox).getElements()

    const checkEpisodes = checkBoxes[1]
    expect(checkEpisodes.props.checked).toEqual(false);


  });
});