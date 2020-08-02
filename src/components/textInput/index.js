import React from 'react'
import './style.scss'

const TextInput =({label ,name, value, type, onChange, status, message})=>{
    return(
        <div className="inputContainer">
            <label className="label">{label}</label>
            <input
                className="input"
                name={name}
                value={value} 
                type={type}
                onChange={onChange}/>
            {status === true && <div className="errorContainer">{message}</div>}
        </div>
    )
}

export default TextInput