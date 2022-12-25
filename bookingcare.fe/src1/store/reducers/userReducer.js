import actionTypes from '../actions/actionTypes';

const initialState = {
 testValue: 0,
};

const userReducer = (state = initialState, action) => {
 const { type, payload } = action;

 if (type === actionTypes.TEST_ACTION) {
  return {
   ...state,
   testValue: state.testValue + payload,
  };
 }

 return state;
};

export default userReducer;
