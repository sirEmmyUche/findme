import {Link} from 'react-router-dom';

function Footer(){
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
                       <Link to={'/about'}>About us</Link>
                    </li>
                    <li> 
                       <Link to={'#'}>Blog</Link>
                    </li>
                </ul>
            </div>
        </footer>
}

export default Footer;