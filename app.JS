let response = fetch('https://jsonplaceholder.typicode.com/users').then(res=>{
    let parsedData = res.json()
    console.log(parsedData)
    return(parsedData)                                     //.then always returns a promise
   }).then(book => {console.log(book)})                          
















































