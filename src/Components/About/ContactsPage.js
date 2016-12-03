import React from 'react'
import MailTo from 'react-mailto';

export default class contactsPage extends React.Component{
    render(){
        return(
            <div className="contacts-container" id="contacts">
                <h1>Contact Us</h1>
                <section className="contacts-info">
                    <div>
                        <span>
                            <strong>Name: </strong>CodeFox©
                        </span>
                    </div>
                    <div>
                        <span>
                            <strong>Address: </strong>Sofia, Izgrev, "Tintiava" 15-17
                        </span>
                    </div>
                    <div>
                        <span>
                            <strong>Phone: </strong>+359 2 58985423
                        </span>
                    </div>
                    <div>
                        <span>
                            <strong>Email: </strong>
                            <MailTo email="CodeFox@gmail.com" obfuscate={true}>
                                CodeFox@gmail.com
                            </MailTo>
                        </span>
                    </div>
                </section>
            </div>
        )
    }
}