// declare the action types
export const ADD_CARD = "ADD_CARD"
export const DELETE_CARD = "DELETE_CARD"
export const MOVE_CARD = "MOVE_CARD"

// action creators for card
export const addCard = (text, listId) => ({
  type: ADD_CARD,
  payload: {
    text,
    listId
  }
})

export const moveCard = (id, dir) => ({
  type: MOVE_CARD,
  payload: {
    id,
    dir
  }
})

export const deleteCard = id => ({ type: DELETE_CARD, payload: { id } })
