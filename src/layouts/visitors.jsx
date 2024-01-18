import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "../pages/nav";
import Footer from "../pages/footer";

function VisitorLayout(){
    const params = useParams();
    const [useBackgroundImage, setUseBackgroundImage] = useState('')
useEffect(()=>{
    if(params.name == '/'){
        setUseBackgroundImage('/images/medium-shot-smiley-people-with-smartphone.jpg')
    }
},
[params.name]
)

    return( 
        <>
            <header className="set-header" style={
                {
                    backgroundImage:`url(${useBackgroundImage})`,
                }
            }>
                <Nav/>
            </header>
            <Outlet/>
            <Footer/>
        </>
    )
}
 
export default VisitorLayout;