import React from 'react';
import store from "./reducer/store"
import {Provider} from "react-redux"
import Index from "./view/index"
function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Index></Index>
        </Provider>
    </div>
  );
}

export default App;
