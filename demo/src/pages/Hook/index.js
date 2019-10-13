import React, { useState, useEffect, useRef } from 'react';
import Child from './Child';
export default function Hook() {
    // const [count, func] = useState(0)
    const child = useRef(null)
    useEffect(() => {
        console.log(child)
    })        
    console.log(2)
    
    return (
        <div>123
            <Child ref={child} />
            <input  />
        </div>
    )
}