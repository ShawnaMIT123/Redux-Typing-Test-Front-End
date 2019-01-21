import React from 'react'


class Stats extends React.Component {




  render(){
      let {submittedWordsArray}= this.props

      let correctWords = submittedWordsArray.filter((word)=>{
             return word["correct"] == true
      })
      let correctWordsCount = correctWords.length
      let incorrectWordsCount = submittedWordsArray.filter((word)=>{
             return word["correct"] == false
      }).length

      let correctWordsCharacterCount = correctWords.map((correctWordObject)=>{
            return correctWordObject["typedWord"]
      }).join("").length

      let  submittedWordCount = submittedWordsArray.length

      let accuracyPercentage = 0

      if(submittedWordCount > 0){
            accuracyPercentage = Math.round((correctWordsCount /submittedWordCount)*100)
      }





    return(
    // if timerstopped == false
      <div>
        <div className="ui three statistics">
             <div className="ui huge statistic">
                <div className="value" id="wpm">
                  {correctWordsCount}
                </div>
                <div className="label">
                  Words Per Min
                </div>
              </div>
              <div className="ui huge statistic" >
                <div className="value" id="cpm">
                  {correctWordsCharacterCount}
                </div>
                <div className="label">
                  Characters Per Min
                </div>
              </div>
              <div className="ui huge statistic">
                <div className="value" id="accuracy">
                 {accuracyPercentage} %
                </div>
                <div className="label">
                  Accuracy
                </div>
              </div>

        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
          <div className="ui one statistics">

                <div className="ui huge statistic" >
                  <div className="value">
                    {this.props.timer["seconds"]}
                  </div>
                  <div className="label">
                    Timer
                  </div>
                </div>)

          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

      </div>
    )
  }

}

export default Stats

// <MinuteTimer appState={this.props.appState} timerStarted={this.props.timerStarted} timer={this.props.timer} />
// <WordPerMin appState={this.props.appState}/>
// <CharsPerMin appState={this.props.appState}/>
// <Accuracy appState={this.props.appState}/>
