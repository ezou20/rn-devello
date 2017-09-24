import { combineReducers } from "redux"
import {
  ADD_CARD,
  DELETE_CARD,
  MOVE_CARD,
} from "./actions"

const initialState = {
  boards: [],
  user: {},
  nextCardId: 0,
  nextListId: 0,
  visible: false,
  parent: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      // implement me
    }

    case DELETE_CARD: {
      // implement me
    }

    case MOVE_CARD: {
      // implement me
    }
}
