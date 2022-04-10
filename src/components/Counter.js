import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  const isShownCounter = useSelector(state => state.counter.isShownCounter)
  
  console.log(counter)

  const toggleCounterHandler = () => {
    dispatch({
      type: 'toggle'
    })
  };

  const increment = () => {
    dispatch({
      type: 'increment'
    })
  }

  const decrement = () => {
    dispatch({
      type: 'decrement'
    })
  }

  const increase = (payload) => {
    dispatch({
      type: 'increase',
      payload: 4
    })
  }

  const reset = (payload) => {
    dispatch({
      type: 'reset',
    })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        isShownCounter && <div>
          <div className={classes.value}>-- COUNTER VALUE -- {counter}</div>
          <button onClick={increment}>Increment Counter</button>
          <button onClick={decrement}>Decrement Counter</button>
          <button onClick={increase}>Increase Counter</button>
          <button onClick={reset}>Reset Counter</button>
        </div>
      }
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
