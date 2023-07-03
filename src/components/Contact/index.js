import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('contact_service', 'contact_form', refForm.current, 'gVRuSnlLUXhPg9z_C').then(
            () => {
                alert("Message sent successfully! I'll be in touch shortly!")
                window.location.reload(false)
            }, 
            () => {
                alert('Message failed to send! Try again or contact me on LinkedIn instead!')
            }
        )
    }
    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    Contact me
                </h1>
                <p>
                    I'm interested primarily in SWE/MLE roles, but also am very open to anything adjacent. 
                    If you know of any opportunities (or just want to say hi), please feel free to contact me!
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li> <input type='submit' className='flat-button' value='Send' /></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default Contact