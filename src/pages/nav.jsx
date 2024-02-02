import { useState } from "react";
import { Link } from "react-router-dom";

function Nav(){
const [openSignup, setOpenSignup] = useState(false);
const [openhamburger, setOpenHamburger ] = useState(false);

const toggleSignUp = ()=> setOpenSignup(!openSignup);
const toggleHamburger = ()=> setOpenHamburger(!openhamburger);

return(
        <nav>
        <div className="logo">FindMe</div>
        <div className='nav-div-container'>
        <div className='register-support-holder'>
        <div className="support">Support</div>
        <div onClick={toggleSignUp} className="signup">Sign up
        <div className={openSignup?"create-account":"close-signup"}>
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
        <div className='menubar' onClick={toggleHamburger}>
        <span></span>
        <span></span>
        <span></span>
        <div className={openhamburger?"hamburger--box":"close-hamburger--box"}>
        <div className="hamburger-content">
        <div>
        <div className="content--first--container">
        <h4 className="hamburger--findme">Findme</h4>
            <ul>
            <li>
                <Link to={'#'}>
                        <div className="hamburger--ul-li-item">
                            <div className="acn-reg-icon-box"><img src="/icons/checkmark-male-user-color-icon.svg"/></div>
                            <div className="acn-reg-type">
                                <h3>Find a ride</h3>
                                <p>Go anywhere, anytime at your own comfort</p>
                            </div>
                        </div>
                </Link>
            </li>
            <li>
                <Link to={'#'}>
                <div className="hamburger--ul-li-item">
                            <div className="acn-reg-icon-box"><img src="/icons/checkmark-male-user-color-icon.svg"/></div>
                            <div className="acn-reg-type">
                                <h3>Find a delivery personnel</h3>
                                <p>Send your product anywhere</p>
                            </div>
                        </div>
                </Link>
            </li>
            <li>
                <Link to={'#'}>
                <div className="hamburger--ul-li-item">
                            <div className="acn-reg-icon-box"><img src="/icons/checkmark-male-user-color-icon.svg"/></div>
                            <div className="acn-reg-type">
                                <h3>Find an electrician</h3>
                                <p>Repair your faulty electricals with our experts</p>
                            </div>
                        </div>
                </Link>
            </li>
            <li>
                <Link to={'#'}>
                <div className="hamburger--ul-li-item">
                            <div className="acn-reg-icon-box"><img src="/icons/checkmark-male-user-color-icon.svg"/></div>
                            <div className="acn-reg-type">
                                <h3>Find a plumber</h3>
                                <p>Request for a plumber near you</p>
                            </div>
                        </div>
                </Link>
            </li>
            <li>
                <Link to={'#'}>
                <div className="hamburger--ul-li-item">
                            <div className="acn-reg-icon-box"><img src="/icons/checkmark-male-user-color-icon.svg"/></div>
                            <div className="acn-reg-type">
                                <h3>Find a carpenter</h3>
                                <p>Request for a carpenter near you</p>
                            </div>
                        </div>
                </Link>
            </li>                    
        </ul>
        </div>
        </div>
        <div className="content--first--container">
            <h4 className="hamburger--findme">Partner with us</h4>
            <ul>
            <li>
                <Link to={'#'}>
                    <div className="hamburger--ul-li-item">
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
                    <div className="hamburger--ul-li-item">
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
                    <div className="hamburger--ul-li-item">
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
                    <div className="hamburger--ul-li-item">
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
                    <div className="hamburger--ul-li-item">
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
                    <div className="hamburger--ul-li-item">
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
        </div>
        </div>
        </nav>
)
}


export default Nav;