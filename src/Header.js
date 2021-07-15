import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import img1 from './Images/Sparx.png';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LaunchIcon from '@material-ui/icons/Launch';
import StarsIcon from '@material-ui/icons/Stars';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { auth } from "./firebase";


function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }


  return (
      <div className="header">
          <Link to="/">
           <img
        className="header_logo"
        src={img1}
      />
          
          
          </Link>
     

          <div className="header__search">
              
              <input className="header__searchInput" type="text" placeholder="Search..."></input>
              <SearchIcon className="header__searchIcon" />
              
            </div>

          <div className="header__nav">
            <Link to={!user && '/login'}>
              <div onClick={handleAuthentication} className="header__option">
                 <span className="header__optionLineOne">
                      {user ? <ExitToAppIcon /> : <LaunchIcon /> }
                  </span>   
                  
              </div>
            </Link>


              <div className="header__option">
                  <span className="header__optionLineOne">
                      <StarsIcon />
                  </span>
                  
              </div>
              
              <Link to="/checkout">
              <div className="header__optionBasket">
                  <ShoppingBasketIcon />
                 <span className="header__optionLineTwo header__basketCount">
                  {basket?.length}   
                  </span>
              </div>
              </Link>
            
              </div>
        </div>
  );
}

export default Header;
