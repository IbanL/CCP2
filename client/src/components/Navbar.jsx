import React ,{useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    Cookies.remove('token');
    setIsLoggedIn(false);
    navigation('/login');
  }


  return (
    
      <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

   
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 link-secondary">Accueil</Link></li>
        {isLoggedIn && (
              <li><Link to="/competences" className="nav-link px-2 link-dark">Gestion competences</Link></li>
    )}
      </ul>

    
      <div className="col-md-3 text-end">
      
      {!isLoggedIn ? (
        <>
        <Link to="/login">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        </Link>
        <Link to='/register' >
        <button type="button" className="btn btn-primary">Register</button>
        </Link>
        </>
      ) : (
        <>
        <button type="button" className="btn btn-outline-danger me-2" onClick={handleLogout}>Logout</button>
        </>
      )}
      </div>
    </header>
  </div>
  )
}

export default Navbar