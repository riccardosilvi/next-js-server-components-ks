
const fetchCarachter = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch(`https://swapi.dev/api/people/1`)
    return res.json()
}

export default async function Luke(){
    const {name} = await fetchCarachter()
    return (
        <h1>best charachter is {name}!</h1>
    )
}
