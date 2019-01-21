import React from 'react';


class Header extends React.Component{
    render(){
       return (
             <div>
               <img className="header" src={require('../typeit.gif')}/>
             </div>
       )
    }
}

  export default Header
