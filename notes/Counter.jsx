import React from 'react'
import {increment, decrement} from "./actions"

function Counter() {
        const counter = useSelector(state => state.counter);
        const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter
