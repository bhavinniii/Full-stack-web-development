const fs = require('fs')

fs.readFileSync('./test.txt', (error,data)=>{
    if(error) console.log(error)
else console.log(typeof data)
})
console.log(fs.readFileSync('./test.txt', 'utf-8'))
 