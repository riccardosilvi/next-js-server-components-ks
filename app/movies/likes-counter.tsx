"use-client"
import {LikeContext} from "@/app/movies/likes-provider";
import {useContext} from "react";
export default function LikesCounter() {
    const {count} = useContext(LikeContext)
    return (
        <h3>You like {count} planets</h3>
    )
}
