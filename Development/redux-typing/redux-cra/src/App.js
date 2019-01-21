import React, { Component } from 'react';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actions/actionCreators'
import Header from './containers/Header'
import MainContent from './containers/MainContent'
import TypePanel from './containers/TypePanel'

class App extends Component {



  render() {
    return (
      <div className="App">
            <Header />
            <MainContent {...this.props} />
            <TypePanel {...this.props} />

      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) =>{
      return bindActionCreators(actionCreators, dispatch);
}
const mapStateToProps = (state) =>{
      return {
            lyrics: state.lyrics,
            wordIndex: state.wordIndex,
            currentWordObject: state.currentWordObject,
            submittedWordsArray: state.submittedWordsArray,
            timer: state.timer
      }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
