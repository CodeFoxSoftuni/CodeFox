import React from 'react'

export default class AboutPage extends React.Component{
    render(){
        return(
            <div id="members-container">
                <h1>CODE FOX</h1>
                <div className="member" id="name">Plamen
                    <a href="https://www.facebook.com/plamen.k5" className="memberHref">Facebook</a>
                    <a href="https://github.com/psdimitrov" className="memberHref">Github</a>
                    <a href="https://softuni.bg/users/profile/show/psdimitrov" className="memberHref">Softuni Profile</a>
                </div>
                <div className="member" id="name">Rostislav
                    <a href="https://www.facebook.com/rostislavv.kolev" className="memberHref">Facebook</a>
                    <a href="https://github.com/kolev77" className="memberHref">Github</a>
                    <a href="https://softuni.bg/users/profile/show/rostislav_kolev" className="memberHref">Softuni Profile</a>
                </div>
                <div className="member" id="name">Simona
                    <a href="https://www.facebook.com/SHSimeonova" className="memberHref">Facebook</a>
                    <a href="https://github.com/Sim0o0na" className="memberHref">Github</a>
                    <a href="https://softuni.bg/users/profile/show/Sim0o0na" className="memberHref">Softuni Profile</a>
                </div>
                <div className="member" id="name">Vladimir
                    <a href="https://www.facebook.com/vladko.gadjov" className="memberHref">Facebook</a>
                    <a href="https://github.com/gadjov" className="memberHref">Github</a>
                    <a href="https://softuni.bg/users/profile/show/gadjov" className="memberHref">Softuni Profile</a>
                </div>
                <div className="member" id="name">Nikolay
                    <a href="https://www.facebook.com/nikolay.rogchev" className="memberHref">Facebook</a>
                    <a href="https://github.com/NikolayRogchev" className="memberHref">Github</a>
                    <a href="https://softuni.bg/users/profile/show/nikolayrogchev" className="memberHref">Softuni Profile</a>
                </div>
            </div>
        )
    }
}