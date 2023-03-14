import React from 'react';
import {connect} from 'react-redux';
import { incrementCount,decreaseCount, incrementOdd, incrementAsync } from '../actions/index';

const Counter = (props) => {
    return (
        <>
        <h1>Counter</h1>
        <p>Clicked: {props.counter} times
        <button onClick={() => props.decreaseCounter()}>-</button>        
        <button onClick={() => props.incrementCounter()}>+</button>
        <button onClick={() => props.incrementOdd()}>Increment if odd</button>
        <button onClick={() => props.incrementAsync()}>Increment async</button>
        </p>
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
      decreaseCounter: () =>dispatch(decreaseCount()),
      incrementOdd: () =>dispatch(incrementOdd()),
      incrementAsync: () =>dispatch(incrementAsync())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Counter);