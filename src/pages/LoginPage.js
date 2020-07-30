import React from 'react'

const LoginPage =()=>{
    return(
        <div>
            <h3>Sign In</h3>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default LoginPage