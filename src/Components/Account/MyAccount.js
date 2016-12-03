import React, {Component} from 'react';

export default class MyAccount extends Component {
    render() {
        return (
            <div>
                <div className="myAccount">
                    <section className="profile-photo">
                        <img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="user-photo" width="100%"></img>
                    </section>
                    <section>
                        <span className="account-list">
                                <a href="#">Dashboard</a>
                                <a href="#">My Orders</a>
                                <a href="#">Edit Account</a>
                        </span>
                        <br/>
                        <div className="welcome-message">
                            Hello username. From your account manager you can view your recent orders, manage your shipping and billing addresses and edit your account details.
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}