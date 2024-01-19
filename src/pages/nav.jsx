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
                                <h5>Become a driver</h5>
                                <p>Drive and make money</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'}>
                                <h5>Become a dispatch rider</h5>
                                <p>Make extra money from your ride</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'}>
                                <h5>Create account as an electrician</h5>
                                <p>Reach out to more people </p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'}>
                                <h5>Create a plumber account</h5>
                                <p>Let your client easily find you!</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'}>
                                <h5>Open an account as a carpenter</h5>
                                <p>Your skill is needed</p>
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