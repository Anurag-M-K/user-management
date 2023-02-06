const adminCredential = require('../model/adminCredentialModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const adminLogin = async (req,res)=>{
    let {username,password} = req.body;
    try {
        const admin= await adminCredential.findOne({username});
        if(admin){
            console.log('admin found')
            const validPassword = await bcrypt.compare(password,admin.password)
            if(validPassword){
                const token = jwt.sign({
                    username:admin.username
                },
                
                'secret123'
                )

                res.status(201).json({admin,token});
                console.log("correct");
            }else{
                console.log('password wrong')
            }
        }else{
            console.log("no user");
        }
    }catch (error){
        console.log(error)
    }
}

module.exports = {
    adminLogin
}