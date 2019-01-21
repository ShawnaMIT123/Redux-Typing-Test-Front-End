function wordIndex(state = 0, action) {
  switch(action.type){
    case 'INCREMENT_WORD_INDEX':
      // return the new state with the new comment
      return state + 1
    default:
      return state;
  }
}

export default wordIndex
