import React from 'react'

export default function List() {
    let list = []
    for (let index = 0; index < 100; index++) {
        list[index] = index;
    }
    return (
        <div>
            <ul>
                {list.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}
