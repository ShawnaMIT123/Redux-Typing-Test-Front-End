//increment likes
export function incrementWordIndex(){
  return {
    type:'INCREMENT_WORD_INDEX',
  }
}

// add comments
export function updateCurrentWordObject(inputTextOfCurrentWord, correct){
      console.log("updating Current Word Object")
  return {
    type: 'UPDATE_CURRENT_WORD_OBJECT',
    inputTextOfCurrentWord,
    correct
  }
}

export function clearCurrentWordObject(){
  return {
    type:'CLEAR_CURRENT_WORD_OBJECT',
  }
}

//remove comment
export function newCurrenWordObject(postId, i){
      return {
            type: 'REMOVE_COMMENT',
            i,
            postId
      }
}

export function addSubmittedWord(submittedWord){
      return {
            type: 'ADD_SUBMITTED_WORD_OBJECT',
            submittedWord
      }
}



export function decrementTimer(){
      return {
            type: 'DECREMENT_TIMER'
      }
}
export function startTimer(){
      return {
            type: 'START_TIMER'
      }
}

export function timerComplete(){
      return {
            type: 'TIMER_COMPLETE'
      }
}
