import React, { useState, useEffect } from "react";
import Reservations from "./Reservations";
export default function Login(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [log, setLog] = useState(null);

  const onSubmitFetch = (username, password, route) => {
    if (!username || !password)
      return alert("Please enter username and password, login or sign up");

    fetch(`/${route}/${username}/${password}`)
      .then((res) => res.json())
      .then((response) => {
        
        ;
        if (response===false) return alert("login/sign up unsuccessful try again")
        setLog(true);
        console.log(response)
      });
  };

  return (
    <div>
      <h2>Login or Signup component</h2>
      <form>
        <input
          type='text'
          placeholder='username'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <span>
          <input
            type='button'
            value='Login'
            onClick={() => onSubmitFetch(username, password,'login')}
          />
          <input
            type='button'
            value='Sign Up'
            onClick={() => onSubmitFetch(username, password, 'signUp')}
          />
        </span>
      </form>

      {log ? <Reservations username={username} /> : <h2>Login to see Reservations</h2>}
    </div>
  );
}
