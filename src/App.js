import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './Reducers/App'
import SearchAndDisplay from './Components/SearchAndDisplay';


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
