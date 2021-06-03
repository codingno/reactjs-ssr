import React, { useState} from 'react'
import './Home.css'

export default function Home() {
    const [count, setCount] = useState(0)

    const add = () => setCount(count+1)
    const min = () => setCount(count-1)
    const reset = () => setCount(0)

    return (
        <div>
            <h1>This is App</h1>
            <button className="bismillah" onClick={reset}>reset</button>
            <br></br>
            <h1>{count}</h1>
            <br></br>
            <button onClick={add}>plus</button>
            <button onClick={min}>min</button>
        </div>
    )
}
