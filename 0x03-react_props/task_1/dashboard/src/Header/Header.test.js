import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';
import '../../config/setupTests';

describe('Test Header', () => {

  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('verify that Header renders img', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.Header img')).toHaveLength(1);
  });

  it('verify that Header renders h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.Header h1')).toHaveLength(1);
  });

});
