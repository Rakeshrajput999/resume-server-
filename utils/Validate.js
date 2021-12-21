

const EmailValidate = (email) => {
    const re =/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    return (
        re.test(email)
    )
}

const PasswordValidarte =(password)=> {
    const re =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    
    return(re.test(password))
}
module.exports={EmailValidate,PasswordValidarte}
