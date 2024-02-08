import { Outlet, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import Nav from "../pages/nav";
import Footer from "../pages/footer";

function VisitorLayout(){
    const location = useLocation().pathname;
    const [useBackgroundImage, setUseBackgroundImage] = useState('');
    useEffect(()=>{
        if(location ==  '/'){
            setUseBackgroundImage('/images/uniform-isolated-blue-background.jpg')
        }
    },[location])
    return( 
        <>
            <header className="set-header" 
                style={
                    {
                        // backgroundImage:`url(${'/images/medium-shot-smiley-people-with-smartphone.jpg'})`,
                        backgroundImage:`url(${useBackgroundImage})`,
                    }
                }>
                <Nav/>
                <h1>Find help,<br/>Anytime, Anywhere.</h1>
                <p>
                    FindMe is the all-in-one app that provides help to you in finding a ride or a skilled artisan. 
                    Do you need a ride or a skilled artisan?<br/>
                    With FindMe, you can get the best artise for your work, ride comfortably to your destination
                    and enjoy value for your money.
                </p>
            </header>
            <main>
                <Suspense fallback={<div>Loading.....</div>}>
                    <Outlet/>
                </Suspense>
            </main>
            <Footer/>
        </>
    )
}
 
export default VisitorLayout;






