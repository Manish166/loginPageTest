export const signUpValidator=(fields, errors)=>{
    if (Object.keys(fields).length===0 && fields.constructor === Object){
        errors.firstName = true
        errors.lastName = true
        errors.userName = true
        errors.reUserName = true
        errors.password = true
        errors.rePassword = true
        return errors
    }
    if (fields.firstName===''){
        errors.firstName = true
    }
    else{
        errors.firstName = false
    }
    if (fields.lastName===''){
        errors.lastName = true
    }
    else{
        errors.lastName = false
    }
    if (fields.userName===''){
        errors.userName = true
    }else{
        errors.userName = false
    }
    if (fields.reUserName===''){
        errors.reUserName = true
    }else{
        errors.reUserName = false
    }
    if (fields.password===''){
        errors.password = true
    }else{
        errors.password = false
    }
    if (fields.rePassword===''){
        errors.rePassword = true
    }else{
        errors.rePassword = false
    }
    return errors
}

export const validator =(field)=>{
    if (field===''){
        return true
    }else{
        return false
    }
        
}