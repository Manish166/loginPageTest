import React from 'react'
import './style.scss'
const Header =({heading})=>{
    return(
        <div className="headerContainer">
            <p>{heading}</p>
        </div>
    )
}

export default Header