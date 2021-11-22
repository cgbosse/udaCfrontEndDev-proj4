let getServerData = function() {
    fetch('http://localhost:8081/apiResponseJson')
    .then(res => {
        return res.json()
        }
    )
}
    
export { getServerData }
