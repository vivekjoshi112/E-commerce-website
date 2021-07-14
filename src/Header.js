import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import img1 from './Images/Sparx.png';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarsIcon from '@material-ui/icons/Stars';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {

    const [{ basket }, dispatch] = useStateValue();




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
              <div className="header__option">
                  <span className="header__optionLineOne">
                      <AccountCircleIcon />
                  </span>
                  
              </div>
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
