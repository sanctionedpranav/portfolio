import React from 'react'
import "./Contact.css"
import { ContactCard } from './widget/ContactCard'
import { ContactForm } from './widget/ContactForm'

export const Contact = ({ title, subtitle, contactMeTitle, writeAboutProject }) => {
    return (
        <section className='contact section' id='contact'>
            <h2 className='section-title'>{title}</h2>
            <span className='section-subtitle'>{subtitle}</span>

            <div className='contact-container container grid'>
                <div className='contact-content'>
                    <h3 className='contact-title'>{contactMeTitle}</h3>

                    <ContactCard />

                </div>

                <div className='contact-content'>
                    <h3 className='contact-title'>{writeAboutProject}</h3>

                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
