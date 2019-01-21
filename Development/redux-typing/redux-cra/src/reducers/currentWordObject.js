function currentWordObject(state = { typedWord: "", correct: null }, action) {
  switch(action.type){
    case 'UPDATE_CURRENT_WORD_OBJECT':
      // return the new state with the new comment
      return Object.assign({}, state, {
        typedWord: action["inputTextOfCurrentWord"],
        correct: action["correct"]
      })
      case 'CLEAR_CURRENT_WORD_OBJECT':
        // return the new state with the new comment
        return Object.assign({}, state, {
          typedWord: "",
          correct: null
        })
    default:
      return state;
  }
}

export default currentWordObject
