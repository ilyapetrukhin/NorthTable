import * as actionTypes from "./actionTypes"

export function getData(article: IData) {
  const action: DataAction = {
    type: actionTypes.GET_DATA,
    article,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: DataAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}