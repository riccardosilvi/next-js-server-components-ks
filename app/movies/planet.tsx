export default  function Planets({list}: {list: any[]}){
    return (
        <>
            <h2>planets</h2>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}
