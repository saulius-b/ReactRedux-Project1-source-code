import React from 'react';
import SearchAndDisplay from './/Components/SearchAndDisplay'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../src/Reducers/index'

const initialState = {
  searchText: []
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
    <Provider store={store}>
      <div>
        <SearchAndDisplay />                  
      </div>
    </Provider>
  )
}

export default App;
