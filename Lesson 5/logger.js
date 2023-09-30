const EventEmitter = require('events')

class Logger extends EventEmitter{
    setLog1(key){
        //build event
        this.on(key, (arg) => {
            console.log("listener called",arg)
        })
    }

    getLog1(key,message){
        //called event
        this.emit(key,message)
    }
    
}


module.exports = Logger;
