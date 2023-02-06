const UserCredential = require('../model/userCredentialModel');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const usersignUp = async(req,res)=>{
    let {fname,lname,username,email,password} = req.body;
    password = await bcrypt.hash(password,10);

    const newUser = new UserCredential({
        fname,
        lname,
        username,
        email,
        password
    })
try {
    await newUser.save()
    const token = jwt.sign({
       email:email
    },
    "secret123"
    )
    res.status(201).json({newUser,token});
    
} catch (error) {
    res.status(409).json({message:error.message})
    
}

 }

 const userlogin = async (req,res) =>{
    let {email,password} = req.body;

    try {
        const user = await UserCredential.findOne({email:email});
        if(user){
            const validPassword = await bcrypt.compare(password, user.password)
            if(validPassword) {
                const token = jwt.sign({
                    id:user._id,
                    email:user.email
                },
                
                )
                res.status(201).json({user,token});
            }else{
                console.log('password wrong')
            }
        }else{
            console.log('Invalid details');
        }
    } catch (error) {
        res.status(409).json({message:error.message})
        
    }
 }

 const auth = async (req,res)=>{
console.log('hi')
 }
module.exports = {
    usersignUp,
    userlogin,
    auth
}