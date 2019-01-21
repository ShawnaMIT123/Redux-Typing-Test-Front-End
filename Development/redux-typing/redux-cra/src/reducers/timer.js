function timer(state = { started: false, completed: null , seconds: 60}, action) {

              console.log("running timer state/action", state, action)

            switch(action.type){
                  case 'START_TIMER':
                  // return the new state with the new comment
                  return Object.assign({}, state, {
                    started: true
                  })
                  case 'DECREMENT_TIMER':
                  // return the new state with the new comment
                  return Object.assign({}, state, {
                    seconds: state["seconds"] - 1
                  })
                  case 'TIMER_COMPLETE':
                  return Object.assign({}, state, {
                    completed: true,
                    seconds: 0
                  })

                  default:
                        return state;
            }
}

export default timer
