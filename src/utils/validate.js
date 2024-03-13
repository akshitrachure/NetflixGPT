

const checkValidData = (email,password, password2, username) =>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    if(!isEmailValid) return "Please enter a valid email address"

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isPasswordValid){
        return "Please enter a valid password";  
    }else{
        if(password2 && password!==password2)
            return "Confirm password did not match the Password"
    }

    if(password2 && !username)
        return "Please enter a user name"


    return null;

}

export default checkValidData;