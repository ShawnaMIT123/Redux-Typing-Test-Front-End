import React from 'react';
import Stats from '../components/Stats'


class MainContent extends React.Component{
    render(){
       return (
         <div>
            <Stats {...this.props}/>
         </div>
       )
    }
}

  export default MainContent
