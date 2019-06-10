import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../testing/utils/';
import { Filters } from './Filters'

const defaultProps = {
 
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Filters {...setupProps} />)
}

describe('<Filters />', () => {
  
  test('renders without errors', () => {
    
  })
})