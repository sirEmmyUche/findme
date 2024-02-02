import { Outlet, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import Nav from "../pages/nav";
import Footer from "../pages/footer";

function VisitorLayout(){
    const location = useLocation().pathname;
    const [useBackgroundImage, setUseBackgroundImage] = useState('');
    useEffect(()=>{
        if(location == '/'){
            setUseBackgroundImage('/images/medium-shot-smiley-people-with-smartphone.jpg')
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