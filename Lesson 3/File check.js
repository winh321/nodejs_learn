const fs = require('fs')

const files = fs.readdirSync('./');
console.log(files)

fs.readdir('./',function(err,files){
    if(err){
        console.log('Error found pr naw',err)
    }else{
        console.log('Result get')
    }
})
