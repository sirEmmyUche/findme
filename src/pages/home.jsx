import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
        <header>
            <nav>
                <div className="logo">FindMe</div>
                <div className='nav-div-container'>
                    <div className='register-support-holder'>
                        <div className="support">Support</div>
                        <div className="signup">Sign up</div>
                    </div>
                    <div className='menubar'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </nav>
            <div className="header_description">
                <h1>
                    Find help,<br/>
                    Anytime, Anyday, Anywhere.
                </h1>
                <p>
                FindMe is the all-in-one app that provides help to you in finding a ride or a skilled artisan. 
                Do you need a ride or a skilled artisan?<br/>
                With FindMe, you can get the best artise for your work, ride comfortably to your destination
                and enjoy a ride that fits your lifestyle.
                </p>
            </div>
        </header>
        <main>
            <section>
                <h1>Earn With FindMe</h1>
                <div>
                    <div>Drive</div>
                    <div>Electrical</div>
                    <div>Plumbering</div>
                    <div>Groceries</div> 
                </div>
                <div>
                    <div>
                        <img src="#"/>
                    </div>
                    <div>
                        <ol>
                            <li>1</li>
                            <p>Random words</p>
                            <li>2</li>
                            <p>Random words</p>
                            <li>3</li>
                            <p>Random words</p>
                        </ol>
                    </div>
                </div>
            </section>
            <section>
                <h1>Our Service</h1>
                <div>
                    <div>
                        <h3>Rides</h3>
                        <p>Join our ride</p>
                        <div><img/></div>
                    </div>
                    <div>
                        <h3>Delivery</h3>
                        <p>Send message anytime, anywhere</p>
                        <div><img/></div>
                    </div>
                    <div>
                        <h3>Electrical assistant</h3>
                        <p>Contact the best electrician for your need</p>
                        <div><img/></div>
                    </div>
                    <div>
                        <h3>Rides</h3>
                        <p>Join our ride</p>
                        <div><img/></div>
                    </div>
                    <div>
                        <h3>Rides</h3>
                        <p>Join our ride</p>
                        <div><img/></div>
                    </div>
                    <div>
                        <h3>Rides</h3>
                        <p>Join our ride</p>
                        <div><img/></div>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <div>
                <div><img src="#"/></div>
            </div>
            <div>
                <h4>Findme</h4>
                <ul>
                    <li>
                       <Link to={'#'}> Ride</Link>
                    </li>
                    <li>
                       <Link to={'#'}>Delivery</Link>
                    </li>
                    <li>
                       <Link to={'#'}>Electrician</Link>
                    </li>
                    <li>
                       <Link to={'#'}>Plumber</Link>
                    </li>
                    <li>
                       <Link to={'#'}>Mechanic</Link>
                    </li>
                    {/* <li>
                       <Link to={'#'}>Rentals</Link>
                    </li> */}
                </ul>
            </div>
            <div>
                <h4>Parthner with us</h4>
                <ul>
                    <li>
                       <Link to={'#'}>Sign up as a driver</Link>
                    </li>
                    <li>
                       <Link to={'#'}>Sign up as a delivery personnel</Link>
                    </li>
                    <li>
                       <Link to={'#'}>Sign up as an electrician</Link>
                    </li>
                    <li>
                       <Link to={'#'}>Sign up as a plumber</Link>
                    </li>
                    <li>
                       <Link to={'#'}>Sign up as a mechanic</Link>
                    </li>
                    {/* <li>
                       <Link to={'#'}>Rentals</Link>
                    </li> */}
                </ul>
            </div>
            <div>
                <h4>Company</h4>
                <ul>
                    <li>
                       <Link to={'#'}>About us</Link>
                    </li>
                    <li> 
                       <Link to={'#'}>Blog</Link>
                    </li>
                </ul>
            </div>
        </footer>
        </>
    )
}

export default Home;