import { shallow } from 'enzyme';
import React from 'react';
import '../../config/setupTests';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {

  it('render BodySection and props passed to child', () => {
     const wrapper = shallow(
       <BodySectionWithMarginBottom title="test title">
         <p>test children node</p>
       </BodySectionWithMarginBottom>
     );
     expect(wrapper.find(BodySection).props().title).toEqual('test title');
     expect(wrapper.find(BodySection).props().children.props.children).toEqual('test children node');
  });

});
