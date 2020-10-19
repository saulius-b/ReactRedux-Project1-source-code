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

export default reducer