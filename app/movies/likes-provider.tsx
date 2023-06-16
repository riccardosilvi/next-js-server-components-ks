'use client'

import {createContext, PropsWithChildren, useState} from 'react'

export const LikeContext = createContext({
    count: 0,
    increment: () => {},
    decrement: () => {}
})

export default function LikesProvider({ children } : PropsWithChildren<{}>) {
    const [likesCount, setLikesCount] = useState(0)
    return <LikeContext.Provider value={{
        count: likesCount,
        increment: () => setLikesCount(prev => prev + 1),
        decrement: () => setLikesCount(prev => prev - 1)
    }}>{children}</LikeContext.Provider>
}
