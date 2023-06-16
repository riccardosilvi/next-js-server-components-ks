"use client";
//removing use client breaks the component!
//a server component cannot directly render a client one
import Planet from "@/app/movies/planet";
import LikeButton from "@/app/movies/like";

export default  function Planets({list}: {list: any[]}){
    return (
        <>
            <h2>planets</h2>
            <ul>
                {list.map((item, index) => (
                    <Planet key={index} name={item.name}>
                      <LikeButton />
                    </Planet>
                ))}
            </ul>
        </>
    )
}
