import {useState, useEffect} from "react";


function LoginBox(){

    const[username, setUsername] = useState('Username');
    const[password, setPassword] = useState('Password');


    function whenSubmitHit(){
        console.log('Submit button hit')
        console.log(username)
    }

    return(
        <>
        <button onClick={whenSubmitHit}> Submit </button>
        </>
    )
}

export default LoginBox;