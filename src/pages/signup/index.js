import React, {useState} from 'react'
import TextInput from '../../components/textInput'
import Button from '../../components/button'

const SignUpPage = () =>{   
    const [userName, setUserName] = useState('')

    const handleOnChange =(e)=>{
        setUserName(e.target.value)
    }
    
    const handleSubmit = ()=>{
        console.log('submitted')
    }
    return (
        <div>
            <h3>Sign In</h3>
            <TextInput 
                name='Username'
                type='text'
                value={userName} 
                onChange={handleOnChange}/>
            <Button
                name='NEXT'
                onClick={handleSubmit}/>
            <p>New to Autodesk</p>
            <p>Create account</p>
        </div>
        
    )
}

export default SignUpPage