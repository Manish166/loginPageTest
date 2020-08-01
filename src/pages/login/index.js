import React, {useState} from 'react'
import TextInput from '../../components/textInput'
import Button from '../../components/button'
import './style.scss'
const LoginPage = () =>{   
    const [userName, setUserName] = useState('')

    const handleOnChange =(e)=>{
        setUserName(e.target.value)
    }
    
    const handleSubmit = ()=>{
        console.log('submitted')
    }
    return (
        <div>
            <h3 className='heading'>Sign In</h3>
            <TextInput
                name='Username'
                type='text'
                value={userName} 
                onChange={handleOnChange}/>
            <Button
                name='NEXT'
                onClick={handleSubmit}/>
            <div>
                <span>New to Autodesk? </span> 
                <span>Create account</span>
            </div>  
        </div>
        
    )
}

export default LoginPage