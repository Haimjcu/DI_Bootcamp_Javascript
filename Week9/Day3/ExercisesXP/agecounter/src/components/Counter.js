import React from 'react';
import {connect} from 'react-redux';
import { ageUp,ageDown } from '../actions/index';

const Counter = (props) => {
    return (
        <>
        <h1>Counter</h1>
        <p>your age: {props.counter}</p>
        <button onClick={() => props.ageUp()}>Age UP</button>        
        <button onClick={() => props.ageDown()}>Age Down</button>
        </>
    )

}

const mapStateToProps = (state) =>{
    return {
      counter: state.counter
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      ageUp: () =>dispatch(ageUp()),
      ageDown: () =>dispatch(ageDown()),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Counter);