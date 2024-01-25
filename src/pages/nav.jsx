import { useState } from "react";
import { Link } from "react-router-dom";
function Nav(){
    return(
        <nav>
        <div className="logo">FindMe</div>
        <div className='nav-div-container'>
            <div className='register-support-holder'>
                <div className="support">Support</div>
                <div className="signup">Sign up
                <div className="create-account">
                    <ul>
                        <li>
                            <Link to={'#'}>
                                <div className="reg-icon-container">
                                    <div className="acn-reg-icon-box"><img src="/icons/driver-icon.svg"/></div>
                                    <div className="acn-reg-type">
                                        <h3>Become a driver</h3>
                                        <p>Drive and make money</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'}>
                                <div className="reg-icon-container">
                                    <div className="acn-reg-icon-box"><img src="/icons/bike-delivery-icon.svg"/></div>
                                    <div className="acn-reg-type">
                                        <h3>Become a dispatch rider</h3>
                                        <p>Make extra money from your ride</p>
                                    </div>
                                </div>
                            </Link> 
                        </li>
                        <li>
                            <Link to={'#'}>
                                <div className="reg-icon-container">
                                    <div className="acn-reg-icon-box"><img src="/icons/connected-plug-icon.svg"/></div>
                                    <div className="acn-reg-type">
                                        <h3>Create account as an electrician</h3>
                                        <p>Reach out to more people </p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'}>
                                <div className="reg-icon-container">
                                    <div className="acn-reg-icon-box"><img src="/icons/services-plumber-icon.svg"/></div>
                                    <div className="acn-reg-type">
                                        <h3>Create a plumber account</h3>
                                        <p>Let your client easily find you!</p>
                                    </div>
                                </div>
                               
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'}>
                                <div className="reg-icon-container">
                                    <div className="acn-reg-icon-box"><img src="/icons/hammer-tool-icon.svg"/></div>
                                    <div className="acn-reg-type">
                                        <h3>Open an account as a carpenter</h3>
                                        <p>Your skill is needed</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'}>
                                <div className="reg-icon-container">
                                    <div className="acn-reg-icon-box"><img src="/icons/checkmark-male-user-color-icon.svg"/></div>
                                    <div className="acn-reg-type">
                                        <h3>Sign up as a client</h3>
                                        <p>Need to hire someone? Open an account</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className='menubar'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </nav>
    )
}


export default Nav;