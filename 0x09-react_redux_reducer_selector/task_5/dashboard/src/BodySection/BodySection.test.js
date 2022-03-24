import { shallow } from 'enzyme';
import React from 'react';
import '../../config/setupTests';
import BodySection from './BodySection';

describe('BodySection', () => {

  it('verify BodySection renders correctly the children', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('h2').text()).toEqual('test title');
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').text()).toEqual('test children node');
  });

});
