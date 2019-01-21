import React from 'react';
import LeftPanelDisplay from '../components/LeftPanelDisplay'
import RightPanelText from '../components/RightPanelText'
import TypingInputField from '../components/TypingInputField'

class TypePanel extends React.Component{
    render(){
       return (
         <div  className="Page">
                <LeftPanelDisplay{...this.props} />
                <RightPanelText {...this.props} />
                <TypingInputField {...this.props} />
         </div>
       )
    }
}

  export default TypePanel
