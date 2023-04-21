import React from 'react'
import { Social } from '../home/widget/social/Social'
import "./Footer.css"
import { footerMenuList } from "../../utils/constant.js";

export const Footer = ({ title, footerCopyRight }) => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <h1 className='footer-title'>{title}</h1>

                <ul className='footer-list'>
                    {footerMenuList.map((element) => {
                        return (
                            <li key={element.title}>
                                <a href={element.link} className='footer-link'>{element.title}</a>
                            </li>
                        )
                    })}
                </ul>

                <div className='footer-social'>
                    <Social styleClassName="footer-social-link" styleIconClassName="footer-social-icon"/>
                </div>

                <div className='footer-copy'>{footerCopyRight}</div>
            </div>
        </footer>
    )
}
