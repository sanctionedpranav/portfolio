import React from 'react'
import { ContactMe } from "../../../utils/constant.js";


export const ContactCard = () => {
    return (
        <div className='contact-info'>
            {ContactMe.map((element) => {
                return (
                    <div key={element.contactMeTitle} className='contact-card'>
                        <i className={`1bx bx-${element.contactMeIcon} contact-card-icon`}></i>

                        <h3 className='contact-card-title'>{element.contactMeTitle}</h3>
                        <span className='contact-card-data'>{element.contactMeData}</span>

                        <a target="_blank" href={element.link ? `https://web.whatsapp.com/` :"#"} className='contact-btn'>{element.contactMeButton}<i className='bx bx-right-arrow-alt contact-btn-icon'></i></a>
                    </div>
                )
            })}


        </div>
    )
}
