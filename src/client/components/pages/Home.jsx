import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Home.css'

export default function Home() {
    const dispatch = useDispatch()
    const countRedux = useSelector(state => state.counter)
    const [count, setCount] = useState(countRedux)

    useEffect(() => {
        setCount(countRedux)
    },[countRedux])

    const add = () => setCount(count+1)
    const min = () => setCount(count-1)
    const reset = () => setCount(0)

    const addRedux = () => dispatch({ type: 'INCREMENT' })
    const minRedux = () => dispatch({ type: 'DECREMENT' })

    return (
        <div>
            <h1>This is App</h1>
            <button className="bismillah" onClick={reset}>reset</button>
            <br></br>
            <h1>{count}</h1>
            <br></br>
            <button onClick={add}>plus</button>
            <button onClick={min}>min</button>
            <br></br>
            <h1>redux {countRedux}</h1>
            <button onClick={addRedux}>plus</button>
            <button onClick={minRedux}>min</button>
        </div>
    )
}
