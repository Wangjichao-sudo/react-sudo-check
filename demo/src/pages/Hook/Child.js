import React, { useState, useEffect } from 'react';

export default function Child() {
    const [count, func] = useState(0)
    return (
        <div>dianji {count}
            <div><button onClick={() => func(count + 1)}>+++</button></div> 
        </div>
    )
}