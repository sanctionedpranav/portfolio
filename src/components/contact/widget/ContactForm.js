import React from 'react'
import Button from '../../commonComponent/Button.js'



export const ContactForm = () => {
    return (
        <form className='contact-form'>
            <div className='contact-form-div'>
                <label className='contact-form-tag'>Name</label>
                <input type='text' name='name' className='contact-form-input' placeholder='Insert your name'></input>
            </div>

            <div className='contact-form-div'>
                <label className='contact-form-tag'>Email</label>
                <input type='email' name='email' className='contact-form-input' placeholder='Insert your email'></input>
            </div>

            <div className='contact-form-div contact-form-area'>
                <label className='contact-form-tag'>Project</label>
                <textarea cols="30" rows="10" name='project' className='contact-form-input' placeholder='Write your project'></textarea>
            </div>
            <Button icon="send" name="Send" />
        </form>
    )
}
