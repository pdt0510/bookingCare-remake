import actionTypes from './actionTypes';

export const testActionFn = (value) => ({
 type: actionTypes.TEST_ACTION,
 payload: value,
});
