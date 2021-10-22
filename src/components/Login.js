import React, {useState} from 'react'
export default function Login(props){

const [username, setUsername]=useState(null)
const [password, setPassword]=useState(null)
const handleClick=()=>{}
return(
    <div>
        <h2>Login or Signup component</h2>
    <form>
        {/* <label>Username</label> */}
        <input type="text" placeholder="username" onChange={(e)=>{
            console.log(e.target.value)
            setUsername(e.target.value)
        }}/>
        <br/>
        {/* <label>Password</label> */}
        <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
        <br/>
        <input type="submit" value="Submit"/>
    </form>
    </div>
)
}