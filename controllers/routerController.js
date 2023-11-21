const userModel = require("../models/userModel")

async function login(req, res) {
    const {name, email, password} = req.body
    const foundUser = await userModel.findOne({name,email,password})
    res.json(foundUser)
}

async function signin(req, res) {
    const {name, email, password, cellphone} = req.body
    const createdUser = await userModel.create({name,email,password, cellphone})
    res.json(createdUser)
}
async function logoff(req, res) {
    const {name, email, password} = req.body
    await userModel.deleteOne({name,email,password})
    res.json(`usuario deletado`)
}

async function updateUser(req, res) {
    const {email, password, cellphone, newEmail, newPassword, newCellphone} = req.body
    const updatedUser = await userModel.findOneAndUpdate(
        {email,password, cellphone}, {email: newEmail, password: newPassword, cellphone: newCellphone},
        {new: true})
    res.json(updatedUser)
}

function showMoney(req,res) {
    const {money} = req.body.money
    res.json(money)
}


module.exports = {login, signin, logoff, updateUser, showMoney}