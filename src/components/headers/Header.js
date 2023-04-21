import React, { useState } from "react";
import "./Header.css"

export const Header = ({ companyName, menuList }) => {
    const [Toggle, showMenu] = useState(false);

    return (<div>
        <header className="header">
            <nav className="nav container">
                <a href="#contact" className="nav-logo">{companyName}</a>

                <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list">
                        {menuList.map((element) => {
                            return (
                                <li className="nav-item" key={element}>
                                    <a href={`#${element}`} className="nav-link">
                                        <i className="uil uil-estate nav-icon" ></i>{element}
                                    </a>
                                </li>
                            )
                        })}                        
                    </ul>
                    <i className="uil uil-times nav-close" onClick={() => {
                        showMenu(!Toggle)
                    }}></i>
                </div>
                <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
                
            </nav>
        </header>
    </div>)
}