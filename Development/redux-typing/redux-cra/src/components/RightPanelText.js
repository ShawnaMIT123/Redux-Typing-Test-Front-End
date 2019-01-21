import React from 'react';


class RightPanelText extends React.Component{

      render5WordsofLyrics = () =>{
            return this.props.lyrics.split(" ").slice(this.props.wordIndex, this.props.wordIndex+5).map((word) => {
                  return (
                        <span className="AllWords">
                          {word}
                        </span>
                  )
            })
      }


    render(){

       return (
         <div className="RightContainer">
               <span className="blinking-cursor">|</span>
                {this.render5WordsofLyrics()}
         </div>
       )
    }
}

  export default RightPanelText
