
/**
 * 
 * { level 1
 * email validaton 
 * password validaton 
 * password conferm password same } req 
 * 
 */

const {EmailValidate,PasswordValidarte} = require("../utils/Validate")


const RegisterChecks = (req,res,next) => {
    const {email ,password,confirmPassword} = req.body
    if (typeof email ==="string" &&
        typeof password=== "string" &&
        typeof confirmPassword === "string"&&
        email.length >0&&
        password.length > 8 &&
        confirmPassword === password &&
        EmailValidate(email)&&
        PasswordValidarte(password)){
            next()
        }else{
            res.status(401).send("initial checks fail")
        }
    
}

module.exports= RegisterChecks
