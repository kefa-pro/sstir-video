import { fromJS } from 'immutable';

export const actionTypes = {
  SHOW_LOADING: 'app/show_loading',
  HIDE_LOADING: 'app/hide_loading'
};

export const actionCreators = {
  showLoading() {
    return {
      type: actionTypes.SHOW_LOADING
    };
  },

  hideLoading() {
    return {
      type: actionTypes.HIDE_LOADING
    };
  }
};

export const getLoadingStatus = (state) => {
  return state.getIn(['app', 'isLoading']);
};

const defaultState = {
  isLoading: false
};

export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    case actionTypes.SHOW_LOADING:
      return state.set('isLoading', true);
    case actionTypes.HIDE_LOADING:
      return state.set('isLoading', false);
    default:
      return state;
  }
};
