import {Link} from 'react-router-dom';

function LoginFail(){

    return(
        <>
        <p> Incorrect username or password. Please try again </p>
        <Link to="/" className='linkStyle'> Return to login page </Link>        
        </>
    )
}

export default LoginFail 