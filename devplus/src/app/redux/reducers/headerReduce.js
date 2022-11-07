import { ActionTypes } from "../contans/action-types";

export const productReducer = (state , action ) => {
  switch(action.type) {
    case ActionTypes.FETCH_HEADER_SUCCESS :
      return {...state,products : action.payload};
    default: 
      return state;
  }
}