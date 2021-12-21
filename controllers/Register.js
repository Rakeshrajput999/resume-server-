const User = require("../models/User")



const Register =async (req,res)=>{
const {email ,password} =req.body
try {
    const alreadyexist = await User.findOne({where:{email}})
    if(alreadyexist){
        res.status(401).send("email already exist")
    }
} catch (error) {
    console.error(error);
}
}

module.exports =Register