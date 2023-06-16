export default  function Movies({list}: {list: any[]}){
    return (
        <>
            <h2>movies</h2>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}
