import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import TextInput from '../../components/textInput'
import Button from '../../components/button'
import Footer from '../../components/footer'
import Header from '../../components/header'
const SignUpPage = () =>{   
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [reUserName, setReUserName] = useState('')
    const [password, setPassword] = useState('')
    const [RePassword, setRePassword] = useState('')

    const history = useHistory();

    const handleOnChange =(e)=>{
        setUserName(e.target.value)
    }
    
    const handleSubmit = ()=>{
        console.log('submitted')
    }

    const redirectToSignIn=()=>{
        history.push("/");
    }
    return (
        <div className="mainContainer">
            <Header heading='Create account'/>
            <div className="nameContainer">
                <div className="fname">
                    <TextInput
                        name='First name'
                        type='text'
                        value={firstName} 
                        onChange={handleOnChange}/>
                </div>
                <div className="lname">
                    <TextInput
                        name='Last name'
                        type='text'
                        value={lastName} 
                        onChange={handleOnChange}/>
                </div>
            </div>
            <TextInput
                name='Username'
                type='text'
                value={userName} 
                onChange={handleOnChange}/>
            <TextInput
                name='Re-type username'
                type='text'
                value={reUserName} 
                onChange={handleOnChange}/>
            <TextInput
                name='Password'
                type='password'
                value={password} 
                onChange={handleOnChange}/>
            <TextInput
                name='Re-type password'
                type='text'
                value={RePassword} 
                onChange={handleOnChange}/>
            <Button
                name='NEXT'
                onClick={handleSubmit}/>
            {/* <div style={{textAlign : 'center', fontSize : '14px'}}> */}
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