const express = require('express')
const { login, signin, logoff, updateUser, showMoney } = require('../controllers/routerController')
const router = express.Router()
const app = express()


router.post('/login', login)
router.post('/signin', signin)
router.delete('/logoff', logoff)
router.put('/updateUser', updateUser)
router.post('/showMoney', showMoney)

module.exports = {router, app}