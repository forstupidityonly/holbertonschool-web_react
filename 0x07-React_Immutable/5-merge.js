import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  return([...page1, ...page2]);
}

export function mergeElements(page1, page2) {
  return({...page1, ...page2});
}
