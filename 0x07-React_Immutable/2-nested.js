import { getIn, fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  return (fromJS(getIn(object, array)));
}
