import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function NavBar(){

    const navigate=useNavigate();
    function handleSignIn(){
                navigate("/Login")
    }
    function handleSignOut(){
        navigate("/SignUp")
}
    return(
        <>
           <header className="nav">
              
                <div className="op0">Home</div>
                <div className="op1">About Us</div>
                <div className="op2">Contact Us</div>
                <div className="op3">
                <button className="header-button1" onClick={handleSignIn}>Sign in</button>
     <button className="header-button2" onClick={handleSignOut}>Sign up</button>
                </div>
           
           </header>
        </>
    )
}

export default NavBar;