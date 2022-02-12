import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import '../../config/setupTests';

describe('Test App', () => {

  it('renders without crashing', () => {
    shallow(<App />);
  });

});
