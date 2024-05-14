// require your server and launch it here
const server = require('./api/server')

const PORT = 500

server.listen(PORT, () => {
    console.log('listening on ', PORT)
})