const EventEmitter = require('events')

class Logger extends EventEmitter{
    log(message){
        console.log(message)
        //called event
        this.emit("m","data")
    }
}


module.exports = Logger;
