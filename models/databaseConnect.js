const {connect} = require('mongoose')

async function databaseConnect(URL) {
   return await connect(URL)
}

module.exports = databaseConnect