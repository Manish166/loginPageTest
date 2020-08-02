import React from 'react'
import './style.scss'

const TextInput =({name, value, type, onChange})=>{
    return(
        <div className="inputContainer">
            <label className="label">{name}</label>
            <input
                className="input"
                name={name}
                value={value}
                type={type}
                onChange={onChange}/>
            <span>this is error message</span>
        </div>
    )
}

export default TextInput