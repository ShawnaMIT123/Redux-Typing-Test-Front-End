import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import lyrics from './lyrics'
import wordIndex from './wordIndex'
import currentWordObject from './currentWordObject'
import submittedWordsArray from './submittedWordsArray'
import timer from './timer'


const rootReducer = combineReducers({
      lyrics,
      wordIndex,
      currentWordObject,
      submittedWordsArray,
      timer,
      routing: routerReducer
})

export default rootReducer;
