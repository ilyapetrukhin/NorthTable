import { mockdata } from "../mock";
import * as actionTypes from "./actionTypes"

const initialState: DataState = {
  data: [
    ...mockdata
  ],
}

const reducer = (
    state: DataState = initialState,
    action: DataAction
  ): DataState => {
    switch (action.type) {
      case actionTypes.GET_DATA:
        return {
          ...state,
        }
    }
    return state
  }
  
  export default reducer