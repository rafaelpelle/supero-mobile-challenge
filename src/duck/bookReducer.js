/////////////////// CONSTANTS ///////////////////
const BOOK_MODAL_OPENED = 'BOOK_MODAL_OPENED'
const BOOK_MODAL_CLOSED = 'BOOK_MODAL_CLOSED'

/////////////////// ACTIONS ///////////////////
export const openBookModal = (book) => ({
  type: BOOK_MODAL_OPENED,
  payload: book,
})

export const closeBookModal = () => ({
  type: BOOK_MODAL_OPENED,
})

/////////////////// REDUCER ///////////////////
const INITIAL_STATE = {
  selectedBook: null,
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOK_MODAL_OPENED:
      return { ...state, selectedBook: action.payload }
    case BOOK_MODAL_CLOSED:
      return { ...state, selectedBook: null }
    default:
      return state
  }
}
