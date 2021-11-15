import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div id='contact'>
            <h1>CONTACT</h1>
              <form>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='E-mail Address'/>
                <textarea placeholder='Message'></textarea>
                <input type="submit" value='SEND'/>
            </form>  
        </div>
    )
}

export default Contact
