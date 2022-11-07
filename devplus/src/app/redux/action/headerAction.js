import { ActionTypes } from "../contans/action-types"


export const setProducts = (element) => {
  return {
    type: ActionTypes.FETCH_HEADER_SUCCESS,
    payload: element,
  }
}