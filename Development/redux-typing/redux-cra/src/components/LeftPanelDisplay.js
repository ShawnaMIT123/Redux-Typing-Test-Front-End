import React from 'react';


class LeftPanelDisplay extends React.Component{

      renderCurrentWordObject = () =>{
            if(this.props.currentWordObject["typedWord"] != ""){
                  if(this.props.currentWordObject["correct"] == true){
                        return (
                              <span id="CurrentWord" className="AllWords">
                                {this.props.currentWordObject["typedWord"]}
                              </span>
                        )
                  } else {
                        return (
                              <span id="CurrentWord" className="AllWords BadWord">
                                {this.props.currentWordObject["typedWord"]}
                              </span>
                        )
                  }
            }
      }

      renderSubmittedWords = () => {
            if(this.props.submittedWordsArray.length > 0){
                  return this.props.submittedWordsArray.map((submittedWord)=>{
                        if(submittedWord["correct"] == true){
                              return (
                                    <span className="AllWords">
                                      {submittedWord["typedWord"]}
                                    </span>
                              )
                        } else {
                              return (
                                    <span className="AllWords BadWord">
                                      {submittedWord["typedWord"]}
                                    </span>
                              )
                        }
                  })

            }

      }

    render(){
          return(
                <div className="LeftContainer">
                {this.renderSubmittedWords()}
                {this.renderCurrentWordObject()}
                </div>
          )
    }
}

  export default LeftPanelDisplay
