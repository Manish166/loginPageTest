import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import TextInput from '../../components/textInput'
import Button from '../../components/button'
import Footer from '../../components/footer'
import Header from '../../components/header'
const UserNamePage = () =>{   
    const [userName, setUserName] = useState('')

    const history = useHistory();

    const handleOnChange =(e)=>{
        setUserName(e.target.value)
    }
    
    const handleSubmit = ()=>{
        console.log('submitted')
    }

    const redirectToSignUp=()=>{
        history.push("/signup");
    }
    return (
        <div className="mainContainer">
            <Header heading="Sign in"/>
            <TextInput
                name='Username'
                type='text'
                value={userName} 
                onChange={handleOnChange}/>
            <Button
                name='NEXT'
                onClick={handleSubmit}/>
            <div className="tip">
                <p1>New to Autodesk? </p1>
                <p2 onClick={redirectToSignUp}><strong>Create account</strong></p2>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
        
    )
}

export default UserNamePage