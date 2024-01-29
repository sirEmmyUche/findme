import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
           {/* <header className='home-pg-header'> */}
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
           {/* </header> */}
        <main>
            <section>
                <h1>Earn With FindMe</h1>
                <div>
                    <div>Drive</div>
                    <div>Electrical</div>
                    <div>Plumbering</div>
                    <div>Carpenter</div> 
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
                        <div><img src='#' loading='lazy' /></div>
                    </div>
                    <div>
                        <h3>Delivery</h3>
                        <p>Send message anytime, anywhere</p>
                        <div><img src='#'loading='lazy' /></div>
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
        
        </>
    )
}

export default Home;