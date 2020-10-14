import React from 'react';

import SearchAndDisplay from './/Components/SearchAndDisplay'
import { Provider } from 'react-redux'
import { store } from '../src/redux'

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
