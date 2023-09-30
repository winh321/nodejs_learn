const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('m',function(args){
    console.log("Message successfully logged : " + args.one +" && "+ args.two)
});

emitter.emit("m",{"one":1,"two":2})
