import { AlertAction, AlertState, SET_ALERT } from 'store/types';

const initialState: AlertState = {
  message: '',
};

const alertReducer = (state = initialState, action: AlertAction) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        message: action.payload,
      };
    default:
      return state;
  }
};

export default alertReducer;
