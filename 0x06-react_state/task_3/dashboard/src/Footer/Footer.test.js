import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Footer from './Footer';
import '../../config/setupTests';

describe('Test Footer', () => {

  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('verify that Footer renders the text: Copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes('Copyright')).to.equal(true);
  });

});
