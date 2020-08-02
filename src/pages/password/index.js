import React, {useState} from 'react'
import TextInput from '../../components/textInput'
import Button from '../../components/button'
import Footer from '../../components/footer'
const PasswordPage = () =>{   
    const [password, setPassword] = useState('')

    const handleOnChange =(e)=>{
        setPassword(e.target.value)
    }
    
    const handleSubmit = ()=>{
        console.log('submitted')
    }
    return (
        <div className="mainContainer">
            <div className="welcomeContainer">
                <p1>Welcome</p1>
                <p2>userName</p2>
            </div>
            <TextInput
                name='Password'
                type='password'
                value={password} 
                onChange={handleOnChange}/>
            <Button
                name='Sign in'
                onClick={handleSubmit}/>
            <div className="footer">
                <Footer/>
            </div>
        </div>
        
    )
}

export default PasswordPage