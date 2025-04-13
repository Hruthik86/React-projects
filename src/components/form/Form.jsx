import React, { useState } from 'react'
import "./App.css"

const Form = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")

    const [errorusername, seterrorusername] = useState("")
    const [erroremail, seterroremail] = useState("")
    const [errorpassword, seterrorpassword] = useState("")
    const [errorconfirmpassword, seterrorconfirmpassword] = useState("")

    const [usercolor, setusercolor] = useState("")
    const [emailcolor, setemailcolor] = useState("")
    const [passwordcolor, setpasswordcolor] = useState("")
    const [confirmpasswordcolor, setconfirmpasswordcolor] = useState("")

    const validate = (e) =>{
        e.preventDefault();

        if(username.length > 8) {
            seterrorusername('')
            setusercolor('green')
        }else{
            seterrorusername('username must be 8 letters long')
            setusercolor('red')
        }

        if(email.includes("@gmail")){
            seterroremail('')
            setemailcolor('green')
        }else{
            setemailcolor("red")
            seterroremail("Email should have @gmail")
        }

        if(password.length>8){
            seterrorpassword('')
            setpasswordcolor('green')
        }else{
            seterrorpassword('password should be 8 characters')
            setpasswordcolor('red')
        }

        if(password !== "" && password === confirmpassword){
            seterrorconfirmpassword("")
            setconfirmpasswordcolor("green")
        }else{
            seterrorconfirmpassword("password didn't match")
            setconfirmpasswordcolor('red')
        }

    }

  return (
    <>
    <div className="card">
        <div className="card-image"></div>

            <form>
                <input 
                type="text" 
                placeholder='Name' 
                style={{borderColor: usercolor}} 
                value={username} 
                onChange={e => {setusername(e.target.value)}} 
                />
                <p className='error'>{errorusername}</p>

                <input type="text" 
                placeholder='Email'
                style={{borderColor: emailcolor}}
                value={email}
                onChange={e => setemail(e.target.value)}
                />

                <p className='error'>{erroremail}</p>

                <input type="password" 
                placeholder='Password'
                style={{borderColor : passwordcolor}}
                value={password}
                onChange={e => {setpassword(e.target.value)}}
                />

                <p className='error'>{errorpassword}</p>
               
                <input type="password" 
                placeholder='ConfirmPassword'
                style={{borderColor: confirmpasswordcolor}}
                value={confirmpassword}
                onChange={e => {setconfirmpassword(e.target.value)}}
                />
                <p className="error">{errorconfirmpassword}</p>

                <button className='submit-btn' onClick={validate}>Submit</button>

            </form>   
    </div>
    </>
  )
}

export default Form