import React from 'react'
import './style.scss'

const TextInput =({name, value, type, onChange})=>{
    return(
        <div>
            <label className="label">{name}</label>
            <input
                className="input"
                name={name}
                value={value}
                type={type}
                onChange={onChange}/>
        </div>
    )
}

export default TextInput