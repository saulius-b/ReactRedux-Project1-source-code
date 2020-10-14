import { createStore } from 'redux'

const initialState = {
  searchText: []
}

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function reducer(state = '', action) {
  switch (action.type) {
    case 'ENTER_TEXT':
      return {
        ...state,
        searchText: [...state.searchText, action.payload]
      }
    default:
      return state
  }
}

export const enterSearchText = (text) => ({
  type: 'ENTER_TEXT',
  payload: text
})