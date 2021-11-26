let getServerData = async function(result) {
    console.log(":::::::::Step 06 :::::::::");
    console.log(":::::Starting getServerData::::::::");
    const res = await fetch('http://localhost:8081/apiResponseJson')
        .then(res => {
            return res.json()
            }
        )
}
    
export { getServerData }
