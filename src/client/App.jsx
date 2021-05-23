import React, { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0)

    const add = () => setCount(count+1)
    const min = () => setCount(count-1)
    const reset = () => setCount(0)

    return <React.Fragment>
        <h1>This is App</h1>
        <button onClick={reset}>reset</button>
        <br></br>
        <h1>{count}</h1>
        <br></br>
        <button onClick={add}>plus</button>
        <button onClick={min}>min</button>
    </React.Fragment>
}

export default App 