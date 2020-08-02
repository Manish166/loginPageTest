import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import TextInput from '../../components/textInput'
import Button from '../../components/button'
import Footer from '../../components/footer'
import Header from '../../components/header'
import validator from '../../helper/validator'
const SignUpPage = () =>{   
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState(false)
    const history = useHistory();

    const handleOnChange =(e)=>{
        setValues({...values, [e.target.name] : e.target.value})
    }
    
    const handleSubmit = ()=>{
        console.log('submitted')
        setError(validator(values))
    }

    const redirectToSignIn=()=>{
        history.push("/");
    }
    return (
        <div className="mainContainer">
            <Header heading='Create account'/>
            <div className="nameContainer">
                <div className="fName">
                    <TextInput
                        name='firstName'
                        label='First name'
                        type='text'
                        value={values.firstName || ''} 
                        onChange={handleOnChange}
                        message='Please enter first name'
                        />
                </div>
                <div className="lName">
                    <TextInput
                        name='lastName'
                        label='Last name'
                        type='text'
                        value={values.lastName || ''} 
                        onChange={handleOnChange}
                        message='Please enter last name'/>
                </div>
            </div>
            <TextInput
                name='userName'
                label='Username'
                type='text'
                value={values.userName || ''} 
                onChange={handleOnChange}
                message='Please enter username'/>
            <TextInput
                label='Re-type username'
                name='reUserName'
                type='text'
                value={values.reUserName || ''} 
                onChange={handleOnChange}
                message='Please re-enter first name'/>
            <TextInput
                label='Password'
                name='password'
                type='password'
                value={values.password || ''} 
                onChange={handleOnChange}
                message='Please enter first name'/>
            <TextInput
                label='Re-type password'
                name='rePassword'
                type='text'
                value={values.rePassword || ''} 
                onChange={handleOnChange}
                message='Please re-enter first name'/>
            <Button
                name='NEXT'
                onClick={handleSubmit}/>
            <div className="tip">
                <p1>Already have an account? </p1> 
                <p2 onClick={redirectToSignIn}><strong>Sign in</strong></p2>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
        
    )
}

export default SignUpPage