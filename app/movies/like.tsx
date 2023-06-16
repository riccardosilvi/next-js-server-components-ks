"use client"
import {LikeContext} from "@/app/movies/likes-provider";
import {useContext, useState} from "react";


export default function LikeButton({onClick}: {onClick?: () => void}) {
    const [isLiked, setIsLiked] = useState(false)
    const {increment, decrement} = useContext(LikeContext)
    return (
        <button onClick={() => {
            setIsLiked(prev => {
                (prev ? decrement: increment)();
                return !prev
            })
            onClick?.()
        }}>{!isLiked ? "Like" : "Unlike"}</button>
    )
}
