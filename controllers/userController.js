const User = require('../models/User');
const router = require('../routes/userRouter');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
    register: async(req,res)=>{
    const selectUser = await User.findOne({email:req.body.email});
    if(selectUser) return res.status(400).send('email already exists');
    
    const user= new User({
        name:req.body.name,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password)
            })
    try{
        const saveUser = await user.save();
        res.send(saveUser);
    } catch (error){
        console.log(error);
        res.status(400).send(error)
    }
},
    login: async (req,res)=>{
    const selectedUser = await User.findOne({email: req.body.email});
    if(!selectedUser) return res.status(400).send('email or password cant be found');

        const match = bcrypt.compareSync(req.body.password, selectedUser.password);
        if(!match) return res.status(400).send('login Error');

        const token = jwt.sign({id:selectedUser._id}, `${process.env.MY_SECRET}`)
        res.header('auth', token)
        res.send('Logged')
    }
}
module.exports = userController;