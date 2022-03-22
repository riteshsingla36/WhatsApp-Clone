import { USER } from "./actionTypes"

const initialState = {
    user: null
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case USER:
    return { ...state, user: payload }

  default:
    return state
  }
}

export default reducer
