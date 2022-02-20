const assert = require("assert");
import {getFullYear, getFooterCopy, getLatestNotification} from './utils.js';

describe('Test Utils', () => {
  
  it('test getFullYear is current full year', () => {
    assert.equal(getFullYear(), new Date().getFullYear());
  });

  it('test getFooterCopy rtn correct string when passed true', () => {
    assert.equal(getFooterCopy(true), 'Holberton School');
  });

  it('test getFooterCopy rtn correct string when passed false', () => {
    assert.equal(getFooterCopy(false), 'Holberton School main dashboard');
  });

  it('test getLatestNotification for corect str', () => {
    assert.equal(getLatestNotification(), '<strong>Urgent requirement</strong> - complete by EOD');
  });
});
