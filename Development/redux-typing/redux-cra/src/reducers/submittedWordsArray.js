function submittedWordsArray(state = [], action) {
              console.log(action, state)
      
  switch(action.type){

    case 'ADD_SUBMITTED_WORD_OBJECT':
      // return the new state with the new comment

      return  [ ...state, action["submittedWord"]]

    default:
      return state;
  }
}

export default submittedWordsArray
