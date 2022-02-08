import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('Test App', () => {

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('App renders a div with the class App-header', () => {
    const myDiv = shallow(<div />);
    expect(myDiv.find('div').first().hasClass('App-header'));
  });

  it('App renders a div with the class App-body', () => {
    const myDiv = shallow(<div />);
    expect(myDiv.find('div').first().hasClass('App-body'));
  });

  it('App renders a div with the class App-footer', () => {
    const myDiv = shallow(<div />);
    expect(myDiv.find('div').first().hasClass('App-footer'));
  });

});
