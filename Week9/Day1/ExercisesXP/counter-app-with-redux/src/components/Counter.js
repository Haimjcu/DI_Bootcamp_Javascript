import React from 'react';
import {connect} from 'react-redux';
import { incrementCount,decreaseCount } from '../actions/index';

const Counter = (props) => {
    return (
        <>
        <h1>Counter</h1>
        <button onClick={() => props.decreaseCounter()}>-</button>
        {props.counter}
        <button onClick={() => props.incrementCounter()}>+</button>
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
      incrementCounter: () =>dispatch(incrementCount()),
      decreaseCounter: () =>dispatch(decreaseCount())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Counter);