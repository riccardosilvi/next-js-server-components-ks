'use client'

import { useState} from 'react'

export default function Counter({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(prev => prev + 1)}>Click me</button>
            {children}
        </div>
    )
}
