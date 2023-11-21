const {model, Schema} = require('mongoose')

const userModel = model('colecaodeUsuarios', new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    cellphone: {type: String, required: true},
}))

module.exports = userModel