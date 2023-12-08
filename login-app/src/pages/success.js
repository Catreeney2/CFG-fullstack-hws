import {Link} from 'react-router-dom';

function LoggedIn(){

    return(
        <>
        <p> Login in successful </p>
        <Link to="/" className='linkStyle'> Log out </Link>        
        </>
    )
}

export default LoggedIn 