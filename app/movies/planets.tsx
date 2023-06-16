import Planet from "@/app/movies/planet";
import LikeButton from "@/app/movies/like";
import LikesCounter from "@/app/movies/likes-counter";

export default  function Planets({list}: {list: any[]}){
    return (
        <>
            <h2>planets</h2>
            <LikesCounter/>
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
