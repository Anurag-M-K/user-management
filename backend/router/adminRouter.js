const express = require('express')
const { adminLogin } = require('../controller/adminLoginController')
const { getAllUsers,deleteUser} = require('../controller/userController')
const adminrouter = express.Router()


adminrouter.post('/adminlogin',adminLogin);
adminrouter.post('/userdetails',getAllUsers);
adminrouter.post('/userDelete',deleteUser);


module.exports = adminrouter;
