import actionTypes from '../actions/actionTypes';

const initialState = {
 allUsers: null,
};

const adminReducer = (state = initialState, action) => {
 const { type } = action;
 if (type === actionTypes.SUCCEEDED_GET_ALL_USERS) {
  return {
   ...state,
   allUsers: action.payload.users,
  };
 }
 return state;
};

export default adminReducer;
