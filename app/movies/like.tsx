"use-client"
import {useState} from "react";


export default function LikeButton({onClick}: {onClick?: () => void}) {
    const [isLiked, setIsLiked] = useState(false)
    return (
        <button onClick={() => {
            setIsLiked(prev => !prev)
            onClick?.()
        }}>{!isLiked ? "Like" : "Unlike"}</button>
    )
}
