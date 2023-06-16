import Movies from "@/app/movies/movies";
import {Suspense} from "react";
import Planets from "@/app/movies/planet";
import Luke from "@/app/movies/charachter";
async function getMovies() {
    const res = await fetch(`https://swapi.dev/api/films`)
    return res.json()
}
async function getPlanets() {
    const res = await fetch(`https://swapi.dev/api/planets`)
    return res.json()
}

export default async function Page() {

    const [movies, planets] = await Promise.all([getMovies(),getPlanets()])

    return (
        <>
            <h1>Movies and planets</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Movies list={movies.results}/>
                <Planets list={planets.results}/>
            </Suspense>
            <Suspense fallback={<div>Guess who is the best...</div>}>
                <Luke/>
            </Suspense>
        </>
    )
}
