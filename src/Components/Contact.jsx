import React from 'react'
import ContactEmail from '../sections/ContactEmail'

const Contact = () => {
    return (
        <section id="contact" className='contact'>

            <div className="contact-section">
                <h2 className='contact-title'>Contact Us</h2>

                <div className='contact-box'>
                    <div className='contact-left'>
                        <iframe
                            src="https://maps.google.com/maps?hl=en&q=Jamshedpur%2C%20Jharkhand&t=&z=13&ie=UTF8&iwloc=B&output=embed"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                    <div className='contact-right'>
                        <div className='contact-details'>
                            <div className="contact-address">
                                <h3>Office Address</h3>
                                <p>
                                    Your Company Name<br />
                                    Smart Tech Park, Sector XX<br />
                                    City, State – PIN Code
                                </p>
                            </div>

                            <div className='contact-info'>
                                <h3>Phone</h3>
                                <p>+91 9876543210</p>
                                <h3>Email</h3>
                                <p>support@yourcompany.com</p>
                            </div>
                        </div>
                        <div className='contact-email'>
                            <ContactEmail />
                        </div>
                    </div>
                </div>
            </div>

        </section>


    )
}

export default Contact