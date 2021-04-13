const jwt = require('jsonwebtoken');

module.exports = (req,res) =>{

    const token = req.header('auth');
    if(!token) return res.status(400).send('acess denied');

    try{
        const userVerified = jwt.verify(token, `${process.env.MY_SECRET}`)
        req.user = userVerified;
    }catch(error){
        res.status(400).send('Acess denied');
    }
}
