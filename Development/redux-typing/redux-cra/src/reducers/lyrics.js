
// a reducer takes in two things

// the action
//copy of current this.state......then return the updated store
function lyrics2(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [...state,{
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      // we need to return the new state without the deleted comment
      return [
        // from the start to the one we want to delete
        ...state.slice(0,action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}
function posts(state = [], action){
      switch(action.type){
            case 'INCREMENT_LIKES' :
                  console.log("Incrementing Likes!")
                  console.log("this is state" , state)
                  console.log("this is action" , action)
                  const i = action.index
                  return [
                        ...state.slice(0, i),
                        {...state[i], likes: state[i].likes + 1},
                        ...state.slice(i + 1)
                  ]
                  default:
                        return state;
      }

}

function lyrics(state = [], action) {

  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: lyrics2(state[action.postId], action)
    }
  }
  return state;
}

export default lyrics
