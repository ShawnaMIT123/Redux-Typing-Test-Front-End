import React from 'react';


class TypingInputField extends React.Component{


      handleInput = (e) => {
            this.compareCharacters(e)
            this.beginTimer()


      }

      compareCharacters =(e) => {
            let input = e.target.value
            //if input was the space bar
            if (input[input.length-1]===" "&&input!==" ") {
                  this.handleWordLockIn(e)
            } else if (input === " ") {
                  //if first character in input the space bar
                  e.target.value = ""
            } else {
                  let inputTextOfCurrentWord = input.split(" ").slice(-1)[0] //
                  let lyricTextOfCurrentWord = this.props.lyrics.split(" ").slice(this.props.wordIndex)[0]
                  let inputLength = inputTextOfCurrentWord.length
                  //checking the
                  if(inputTextOfCurrentWord === lyricTextOfCurrentWord.slice(0, inputLength)){
                        this.props.updateCurrentWordObject(inputTextOfCurrentWord, true)

                  } else {
                        this.props.updateCurrentWordObject(inputTextOfCurrentWord, false)
                  }
            }
      }

      handleWordLockIn = (e) => {
            //update wordIndex with space
            let input = e.target.value
            let inputTextOfCurrentWord = input.split(" ").slice(-2)[0] //
            let lyricTextOfCurrentWord = this.props.lyrics.split(" ").slice(this.props.wordIndex)[0]



            if(inputTextOfCurrentWord ===  lyricTextOfCurrentWord){
                  this.props.addSubmittedWord({ typedWord: inputTextOfCurrentWord, correct: true })
            } else {
                  this.props.addSubmittedWord({ typedWord: inputTextOfCurrentWord, correct: false })
            }


            this.props.incrementWordIndex();
            this.props.clearCurrentWordObject();

      }

      LeftPanelDisplay = () => {
            this.props.currentWordObject();
      }

      beginTimer = () => {
        if(this.props.timer["started"] == false){
             this.props.startTimer();
             this.decrementTimerBySec();

        }
      }

      decrementTimerBySec = () => {
            console.log("incrementBySec")
            setInterval(()=>{this.myTimer()},1000);
      }

      myTimer = () => {
        let oldTime = this.props.timer["seconds"]
        let newTime = oldTime - 1
        if(newTime > 0){
             this.props.decrementTimer();
        }else if (newTime == 0) {
             this.props.timerComplete();


        }
      }


    render(){
          return(
          <div className="FormDiv">
             <form className="InputForm">
               <input
                 className="InputField"
                 ref={input=>input&&input.focus()}
                 type="text"
                 onChange={ (e) => this.handleInput(e)}
                 onKeyDown={this.props.handleKeyDown}
                 onKeyUp={this.props.handleKeyUp}
               />
             </form>
      </div>

      )
    }
}

  export default TypingInputField
