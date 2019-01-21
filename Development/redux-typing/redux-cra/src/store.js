import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
// import {browserHistory} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

//import the root reducer
import rootReducer from './reducers/index';

import lyrics from './data/lyrics';


// create an object for the default data

const defaultState = {
  lyrics,
  wordIndex: 0,
  currentWordObject: { typedWord: "", correct: null }
}


// const enhancers = compose(
//       window.devToolsExtension ? window.devToolsExtension() : f => f
// );

const store = createStore(rootReducer, defaultState)


// export const history = syncHistoryWithStore(BrowserRouter, store);

// if(module.hot) {
//       module.hot.accept('.reducers/', () =>{
//             const nextRootReducer =require('./reducers/index').default;
//             store.replaceReducer(nextRootReducer);
//       })
// }

export default store
