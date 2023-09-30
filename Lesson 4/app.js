const Logger = require('./logger')
const logger = new Logger();

logger.on('m', (arg) => {
    console.log("listener called",arg)
})

logger.log('message')
