import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
  const navigate = useNavigate();
  const {isAuth} = useContext(AuthContext);

  function clickHandler() {
      isAuth===true?navigate("/profile"):navigate("/signup")
  }

  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

      <div>

        <button
          type="button"
          onClick={() => navigate('/signin')}
        >
          {isAuth===true?"Ingelogd":"Log in"}
        </button>

        <button
          type="button"
          onClick={clickHandler}
        >
            {isAuth===true?"Profiel": "Registreren"}
        </button>


      </div>
    </nav>
  );
}

export default NavBar;