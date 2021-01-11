import React from 'react'
import Logo from './images/robinhood.svg'
import SearchIcon from '@material-ui/icons/Search';
import './css/Header.css';

function Header() {
    const iconStyle= {
        marginLeft: ".5rem",
        position: "absolute",
        color: "#31363a"
    }
    const searchBarStyle= {
        padding: "0rem 1rem 1rem 2.10rem",
        width: "100%"
    }

    return (
        <div className="header__wrapper">
            {/* logo */}
            <div className="header__logo">
                <img src={Logo} width={25} />
            </div>
            {/* search */}
            <div className="header__search">
                <SearchIcon style={iconStyle} />
                <div className="header__searchContainer">
                    <input placeholder="Search" type="text" style={searchBarStyle} />
                </div>
            </div>
            {/* menuitems */}
            <div className="header__menuItems">
                <a href="#">Free Stocks</a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
        </div>
    )
}

export default Header
