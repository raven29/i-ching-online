import actions from '../actions/constants';
import {getInintialState} from '../lib/utils';

const positioning = getInintialState().map((s) => ({...s.stem.positioning}));

const defaultState = {positioning};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.DO_SPLIT:
      console.log(action);
      return state;

    default:
      return state;
  }
};